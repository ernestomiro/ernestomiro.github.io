import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  linkedSignal,
  signal,
} from '@angular/core';
import { CaseStudyScreenshot } from '../content/case-studies/case-study.models';
import { LocalizedText, selectLocalizedText } from '../content/portfolio-content.models';
import { LanguageState } from '../language/language-state';

export interface InterfaceSlide extends CaseStudyScreenshot {
  readonly projectTitle?: LocalizedText;
}

const labels = {
  carousel: { en: 'carousel', es: 'carrusel' },
  slide: { en: 'slide', es: 'diapositiva' },
  previous: { en: 'Previous image', es: 'Imagen anterior' },
  next: { en: 'Next image', es: 'Imagen siguiente' },
  pause: { en: 'Pause slideshow', es: 'Pausar presentación' },
  play: { en: 'Play slideshow', es: 'Reproducir presentación' },
} as const satisfies Record<string, LocalizedText>;

@Component({
  selector: 'app-interface-slideshow',
  templateUrl: './interface-slideshow.html',
  styleUrl: './interface-slideshow.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.on-brand]': "tone() === 'brand'" },
})
export class InterfaceSlideshow {
  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly languageState = inject(LanguageState);

  readonly slides = input.required<readonly InterfaceSlide[]>();
  readonly accessibleLabel = input.required<string>();
  readonly tone = input<'default' | 'brand'>('default');
  readonly eagerFirst = input(false);
  readonly autoplay = input(true);
  readonly intervalMs = input(6000);

  protected readonly activeIndex = linkedSignal({
    source: this.slides,
    computation: () => 0,
  });
  protected readonly paused = signal(false);
  protected readonly hovered = signal(false);
  protected readonly reducedMotion = signal(true);
  private readonly inViewport = signal(false);
  private readonly pageVisible = signal(false);
  private pointerPausedState: boolean | undefined;

  protected readonly rotating = computed(
    () =>
      this.autoplay() &&
      this.slides().length > 1 &&
      !this.paused() &&
      !this.hovered() &&
      !this.reducedMotion() &&
      this.inViewport() &&
      this.pageVisible(),
  );

  private readonly rotationEffect = effect((onCleanup) => {
    const browserWindow = this.document.defaultView;
    if (!browserWindow || !this.rotating()) {
      return;
    }

    const timer = browserWindow.setInterval(
      () => this.advance(1),
      Math.max(1000, this.intervalMs()),
    );
    onCleanup(() => browserWindow.clearInterval(timer));
  });

  constructor() {
    afterNextRender(() => {
      const browserWindow = this.document.defaultView;
      if (!browserWindow) {
        return;
      }

      const motionQuery = browserWindow.matchMedia('(prefers-reduced-motion: reduce)');
      const updateMotion = () => this.reducedMotion.set(motionQuery.matches);
      const updateVisibility = () => this.pageVisible.set(!this.document.hidden);
      updateMotion();
      updateVisibility();
      motionQuery.addEventListener('change', updateMotion);
      this.document.addEventListener('visibilitychange', updateVisibility);

      let observer: IntersectionObserver | undefined;
      if (browserWindow.IntersectionObserver) {
        observer = new browserWindow.IntersectionObserver(
          ([entry]) => this.inViewport.set(
            !!entry?.isIntersecting && entry.intersectionRatio >= 0.25,
          ),
          { threshold: [0, 0.25] },
        );
        observer.observe(this.host.nativeElement);
      } else {
        this.inViewport.set(true);
      }

      this.destroyRef.onDestroy(() => {
        observer?.disconnect();
        motionQuery.removeEventListener('change', updateMotion);
        this.document.removeEventListener('visibilitychange', updateVisibility);
      });
    });
  }

  protected stopRotation(): void {
    this.paused.set(true);
  }

  // Pointer focus pauses before click; retain the button's intended action.
  protected rememberRotationState(): void {
    this.pointerPausedState = this.paused();
  }

  protected clearPointerState(): void {
    this.pointerPausedState = undefined;
  }

  protected toggleRotation(): void {
    const wasPaused = this.pointerPausedState ?? this.paused();
    this.pointerPausedState = undefined;
    this.paused.set(!wasPaused);
  }

  protected slidePosition(index: number): 'active' | 'previous' | 'next' | 'hidden' {
    const count = this.slides().length;
    if (count === 0) {
      return 'hidden';
    }

    const distance = (index - this.activeIndex() + count) % count;
    if (distance === 0) {
      return 'active';
    }
    if (distance === 1) {
      return 'next';
    }
    if (distance === count - 1) {
      return 'previous';
    }
    return 'hidden';
  }

  protected move(direction: number): void {
    this.stopRotation();
    this.advance(direction);
  }

  private advance(direction: number): void {
    const count = this.slides().length;
    if (count > 1) {
      this.activeIndex.update((index) => (index + direction + count) % count);
    }
  }

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }

  protected label(key: keyof typeof labels): string {
    return this.localize(labels[key]);
  }
}
