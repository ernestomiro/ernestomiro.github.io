import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LocalizedText,
  NavigationItem,
  ResumeContent,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';
import { SectionNavigation } from '../../navigation/section-navigation';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

const desktopMediaQuery = '(min-width: 70rem)';

const headerLabels = {
  identity: {
    en: 'Senior Software Engineer',
    es: 'Ingeniero de software sénior',
  },
  navigation: {
    en: 'Primary navigation',
    es: 'Navegación principal',
  },
  menu: {
    en: 'Menu',
    es: 'Menú',
  },
} as const satisfies Record<string, LocalizedText>;

type HeaderLabel = keyof typeof headerLabels;

@Component({
  selector: 'app-site-header',
  imports: [LanguageSwitcher, RouterLink],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  private readonly document = inject(DOCUMENT);
  private readonly languageState = inject(LanguageState);
  private readonly sectionNavigation = inject(SectionNavigation);
  private readonly header = viewChild.required<ElementRef<HTMLElement>>('siteHeader');
  private readonly menuButton = viewChild.required<ElementRef<HTMLButtonElement>>('menuButton');

  readonly navigation = input.required<readonly NavigationItem[]>();
  readonly resume = input.required<ResumeContent>();

  protected readonly menuOpen = signal(false);
  protected readonly activeSection = this.sectionNavigation.activeSection;
  protected readonly homeQueryParams = computed(() =>
    this.languageState.language() === 'es' ? { lang: 'es' } : null,
  );

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }

  protected label(label: HeaderLabel): string {
    return this.localize(headerLabels[label]);
  }

  @HostListener('document:keydown.escape')
  protected closeMenuWithEscape(): void {
    if (!this.menuOpen()) {
      return;
    }

    this.closeMenu();
    this.menuButton().nativeElement.focus();
  }

  @HostListener('document:click', ['$event'])
  protected closeMenuFromOutside(event: MouseEvent): void {
    if (!this.menuOpen()) {
      return;
    }

    const target = event.target;

    if (target instanceof Node && !this.header().nativeElement.contains(target)) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize')
  protected closeMenuAtDesktopWidth(): void {
    if (this.document.defaultView?.matchMedia(desktopMediaQuery).matches) {
      this.closeMenu();
    }
  }
}
