import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { NavigationSectionId, SectionId } from '../content/portfolio-content.models';

const observedSectionIds: readonly NavigationSectionId[] = [
  'services',
  'projects',
  'capabilities',
  'contact',
];

const sectionHeadingIds: Readonly<Record<SectionId, string>> = {
  top: 'hero-title',
  about: 'about-title',
  expertise: 'expertise-title',
  technologies: 'technologies-title',
  projects: 'projects-title',
  capabilities: 'capabilities-title',
  services: 'services-title',
  contact: 'contact-title',
};

@Injectable({ providedIn: 'root' })
export class SectionNavigation {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private observer?: IntersectionObserver;
  private routerSubscription?: Subscription;
  private viewportFrame?: number;
  private started = false;

  readonly activeSection = signal<NavigationSectionId | null>(null);

  start(): void {
    if (this.started || !isPlatformBrowser(this.platformId)) {
      return;
    }

    this.started = true;
    this.document.addEventListener('click', this.handleDocumentClick, true);
    this.document.defaultView?.addEventListener('hashchange', this.handleHashChange);
    this.document.defaultView?.addEventListener('scroll', this.handleViewportChange, {
      passive: true,
    });
    this.document.defaultView?.addEventListener('resize', this.handleViewportChange);
    this.routerSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.refreshAfterNavigation());
    this.bindObserver();
    this.focusCurrentFragment();
  }

  stop(): void {
    if (!this.started) {
      return;
    }

    this.started = false;
    this.observer?.disconnect();
    this.observer = undefined;
    this.routerSubscription?.unsubscribe();
    this.document.removeEventListener('click', this.handleDocumentClick, true);
    this.document.defaultView?.removeEventListener('hashchange', this.handleHashChange);
    this.document.defaultView?.removeEventListener('scroll', this.handleViewportChange);
    this.document.defaultView?.removeEventListener('resize', this.handleViewportChange);

    if (this.viewportFrame !== undefined) {
      this.document.defaultView?.cancelAnimationFrame(this.viewportFrame);
      this.viewportFrame = undefined;
    }
  }

  private readonly handleDocumentClick = (event: Event): void => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const anchor = target.closest<HTMLAnchorElement>('a[href]');
    const href = anchor?.getAttribute('href');

    if (!href?.includes('#')) {
      return;
    }

    const fragment = href.slice(href.lastIndexOf('#') + 1);

    if (fragment === 'main-content' || this.isSectionId(fragment)) {
      this.scheduleFocus(fragment);
    }
  };

  private readonly handleHashChange = (): void => {
    this.focusCurrentFragment();
  };

  private readonly handleViewportChange = (): void => {
    const browserWindow = this.document.defaultView;

    if (!browserWindow || this.viewportFrame !== undefined) {
      return;
    }

    this.viewportFrame = browserWindow.requestAnimationFrame(() => {
      this.viewportFrame = undefined;
      this.updateActiveSection();
    });
  };

  private refreshAfterNavigation(): void {
    const browserWindow = this.document.defaultView;

    if (!browserWindow) {
      return;
    }

    browserWindow.requestAnimationFrame(() => {
      browserWindow.requestAnimationFrame(() => {
        this.bindObserver();
        this.focusCurrentFragment();
      });
    });
  }

  private bindObserver(): void {
    const browserWindow = this.document.defaultView;

    if (!browserWindow?.IntersectionObserver) {
      return;
    }

    this.observer?.disconnect();
    const headerHeight =
      this.document.querySelector<HTMLElement>('app-site-header')?.offsetHeight ?? 0;

    this.observer = new browserWindow.IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          this.updateActiveSection();
        }
      },
      {
        rootMargin: `-${headerHeight}px 0px -58% 0px`,
        threshold: [0, 0.15, 0.5],
      },
    );

    for (const sectionId of observedSectionIds) {
      const section = this.document.getElementById(sectionId);

      if (section) {
        this.observer.observe(section);
      }
    }

    this.updateActiveSection();
  }

  private focusCurrentFragment(): void {
    const fragment = this.document.defaultView?.location.hash.slice(1);

    if (fragment === 'main-content' || this.isSectionId(fragment)) {
      this.scheduleFocus(fragment);
    }
  }

  private scheduleFocus(fragment: string): void {
    const browserWindow = this.document.defaultView;

    if (!browserWindow) {
      return;
    }

    this.activeSection.set(
      this.isNavigationSectionId(fragment) ? fragment : null,
    );

    browserWindow.requestAnimationFrame(() => {
      const focusTargetId = this.isSectionId(fragment)
        ? sectionHeadingIds[fragment]
        : fragment;
      const scrollTarget = this.document.getElementById(fragment);
      const focusTarget = this.document.getElementById(focusTargetId);

      scrollTarget?.scrollIntoView({ block: 'start' });
      focusTarget?.focus({ preventScroll: true });
    });
  }

  private updateActiveSection(): void {
    const browserWindow = this.document.defaultView;

    if (!browserWindow) {
      return;
    }

    const headerHeight =
      this.document.querySelector<HTMLElement>('app-site-header')?.offsetHeight ?? 0;
    const activationLine = headerHeight + 1;
    const documentElement = this.document.documentElement;
    const atDocumentEnd =
      browserWindow.scrollY + browserWindow.innerHeight >=
      documentElement.scrollHeight - 2;

    if (atDocumentEnd && this.document.getElementById('contact')) {
      this.activeSection.set('contact');
      return;
    }

    const activeId = observedSectionIds.find((sectionId) => {
      const bounds = this.document.getElementById(sectionId)?.getBoundingClientRect();

      return (
        bounds !== undefined &&
        bounds.top <= activationLine &&
        bounds.bottom > activationLine
      );
    });

    this.activeSection.set(activeId ?? null);
  }

  private isSectionId(value: string | undefined): value is SectionId {
    return value !== undefined && Object.hasOwn(sectionHeadingIds, value);
  }

  private isNavigationSectionId(
    value: string | undefined,
  ): value is NavigationSectionId {
    return observedSectionIds.some((sectionId) => sectionId === value);
  }
}
