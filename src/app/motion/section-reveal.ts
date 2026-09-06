import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  output,
  PLATFORM_ID,
} from '@angular/core';

const revealTargetSelector =
  '[data-reveal-block], [data-reveal-item], .section__intro, .section__body';
const revealStateAttribute = 'data-reveal-state';

@Directive({
  selector: '[appSectionReveal]',
})
export class SectionReveal {
  readonly initialRevealReady = output<void>();

  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;
  private initialRevealFrame?: number;
  private started = false;

  constructor() {
    afterNextRender(() => this.start());
    this.destroyRef.onDestroy(() => this.stop());
  }

  private start(): void {
    const browserWindow = this.document.defaultView;

    if (!this.isBrowser || !browserWindow || this.started) {
      return;
    }

    this.started = true;
    const candidates = Array.from(
      this.host.querySelectorAll<HTMLElement>(revealTargetSelector),
    );
    const targets = candidates.filter(
      (candidate) => !candidate.querySelector(revealTargetSelector),
    );
    const reduceMotion = browserWindow.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion || !browserWindow.IntersectionObserver) {
      for (const target of targets) {
        this.reveal(target);
      }

      this.initialRevealReady.emit();
      return;
    }

    const revealTogether = this.host.hasAttribute('data-reveal-together');
    const revealLine = browserWindow.innerHeight * (revealTogether ? 1 : 0.88);
    const triggerBounds = revealTogether
      ? this.host.getBoundingClientRect()
      : undefined;
    const initialTargets: HTMLElement[] = [];
    const pendingTargets = targets.filter((target) => {
      const revealOnLoad = target.hasAttribute('data-reveal-on-load');
      const bounds = triggerBounds ?? target.getBoundingClientRect();

      if (
        target.contains(this.document.activeElement) ||
        (!revealOnLoad && bounds.bottom <= 0)
      ) {
        this.reveal(target);
        return false;
      }

      target.setAttribute(revealStateAttribute, 'pending');

      if (revealOnLoad || bounds.top <= revealLine) {
        initialTargets.push(target);
        return false;
      }

      return true;
    });

    if (pendingTargets.length === 0 && initialTargets.length === 0) {
      this.initialRevealReady.emit();
      return;
    }

    this.host.setAttribute('data-reveal-ready', 'true');
    this.host.addEventListener('focusin', this.handleFocusIn, true);

    if (initialTargets.length > 0) {
      // Commit the pending style before starting the shared CSS transition.
      this.initialRevealFrame = browserWindow.requestAnimationFrame(() => {
        this.initialRevealFrame = browserWindow.requestAnimationFrame(() => {
          this.initialRevealFrame = undefined;
          for (const target of initialTargets) {
            this.reveal(target);
          }

          this.initialRevealReady.emit();
        });
      });
    } else {
      this.initialRevealReady.emit();
    }

    if (pendingTargets.length === 0) {
      return;
    }

    this.observer = new browserWindow.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const revealedTargets = revealTogether
            ? pendingTargets
            : [entry.target as HTMLElement];

          for (const target of revealedTargets) {
            this.reveal(target);
          }

          this.observer?.unobserve(entry.target);
        }
      },
      {
        rootMargin: revealTogether ? '0px' : '0px 0px -12% 0px',
        threshold: revealTogether ? 0 : 0.1,
      },
    );

    // A grouped reveal observes the stable host, never its translated children.
    for (const target of revealTogether ? [this.host] : pendingTargets) {
      this.observer.observe(target);
    }
  }

  private readonly handleFocusIn = (event: FocusEvent): void => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const pendingBlock = target.closest<HTMLElement>(
      `[${revealStateAttribute}="pending"]`,
    );

    if (!pendingBlock || !this.host.contains(pendingBlock)) {
      return;
    }

    pendingBlock.style.setProperty('--reveal-delay', '0ms');
    this.reveal(pendingBlock);
    this.observer?.unobserve(pendingBlock);
  };

  private reveal(target: HTMLElement): void {
    target.setAttribute(revealStateAttribute, 'visible');
  }

  private stop(): void {
    if (this.initialRevealFrame !== undefined) {
      this.document.defaultView?.cancelAnimationFrame(this.initialRevealFrame);
      this.initialRevealFrame = undefined;
    }

    this.observer?.disconnect();
    this.observer = undefined;
    this.host.removeEventListener('focusin', this.handleFocusIn, true);
    this.host.removeAttribute('data-reveal-ready');
    this.started = false;
  }
}
