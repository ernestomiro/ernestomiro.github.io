import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';

const revealTargetSelector = '.section__intro, .section__body';
const revealStateAttribute = 'data-reveal-state';

@Directive({
  selector: '[appSectionReveal]',
})
export class SectionReveal {
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;
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
    const targets = Array.from(
      this.host.querySelectorAll<HTMLElement>(revealTargetSelector),
    );
    const reduceMotion = browserWindow.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion || !browserWindow.IntersectionObserver) {
      for (const target of targets) {
        this.reveal(target);
      }

      return;
    }

    const revealLine = browserWindow.innerHeight * 0.88;
    const pendingTargets = targets.filter((target) => {
      if (target.getBoundingClientRect().top <= revealLine) {
        this.reveal(target);
        return false;
      }

      target.setAttribute(revealStateAttribute, 'pending');
      return true;
    });

    if (pendingTargets.length === 0) {
      return;
    }

    this.host.setAttribute('data-reveal-ready', 'true');
    this.host.addEventListener('focusin', this.handleFocusIn, true);
    this.observer = new browserWindow.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const target = entry.target as HTMLElement;

          this.reveal(target);
          this.observer?.unobserve(target);
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.1,
      },
    );

    for (const target of pendingTargets) {
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
    this.observer?.disconnect();
    this.observer = undefined;
    this.host.removeEventListener('focusin', this.handleFocusIn, true);
    this.host.removeAttribute('data-reveal-ready');
    this.started = false;
  }
}
