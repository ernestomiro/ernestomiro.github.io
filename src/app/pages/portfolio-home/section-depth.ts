import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';

type DepthGroup = 'profile' | 'evidence' | 'contact';

const depthGroupSections = [
  { id: 'top', group: 'profile' },
  { id: 'about', group: 'profile' },
  { id: 'expertise', group: 'profile' },
  { id: 'technologies', group: 'profile' },
  { id: 'projects', group: 'evidence' },
  { id: 'experience', group: 'evidence' },
  { id: 'services', group: 'contact' },
  { id: 'contact', group: 'contact' },
] as const satisfies readonly { id: string; group: DepthGroup }[];

interface ObservedDepthSection {
  readonly element: HTMLElement;
  readonly group: DepthGroup;
}

@Directive({
  selector: '[appSectionDepth]',
})
export class SectionDepth {
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;
  private sections: readonly ObservedDepthSection[] = [];

  constructor() {
    afterNextRender(() => this.start());
    this.destroyRef.onDestroy(() => this.stop());
  }

  private start(): void {
    const browserWindow = this.document.defaultView;

    if (!this.isBrowser || !browserWindow) {
      return;
    }

    this.sections = depthGroupSections.flatMap(({ id, group }) => {
      const element = this.host.querySelector<HTMLElement>(`#${id}`);

      return element ? [{ element, group }] : [];
    });

    this.updateDepthGroup();

    if (!browserWindow.IntersectionObserver) {
      return;
    }

    this.observer = new browserWindow.IntersectionObserver(
      () => this.updateDepthGroup(),
      {
        rootMargin: '-46% 0px -46% 0px',
        threshold: 0,
      },
    );

    for (const { element } of this.sections) {
      this.observer.observe(element);
    }
  }

  private updateDepthGroup(): void {
    const browserWindow = this.document.defaultView;

    if (!browserWindow || this.sections.length === 0) {
      return;
    }

    const activationLine = browserWindow.innerHeight / 2;
    let nearestSection = this.sections[0];
    let nearestDistance = Number.POSITIVE_INFINITY;

    for (const section of this.sections) {
      const bounds = section.element.getBoundingClientRect();

      if (bounds.top <= activationLine && bounds.bottom > activationLine) {
        this.setDepthGroup(section.group);
        return;
      }

      const distance = Math.min(
        Math.abs(bounds.top - activationLine),
        Math.abs(bounds.bottom - activationLine),
      );

      if (distance < nearestDistance) {
        nearestSection = section;
        nearestDistance = distance;
      }
    }

    this.setDepthGroup(nearestSection.group);
  }

  private setDepthGroup(group: DepthGroup): void {
    if (this.host.getAttribute('data-depth-group') !== group) {
      this.host.setAttribute('data-depth-group', group);
    }
  }

  private stop(): void {
    this.observer?.disconnect();
    this.observer = undefined;
    this.sections = [];
  }
}
