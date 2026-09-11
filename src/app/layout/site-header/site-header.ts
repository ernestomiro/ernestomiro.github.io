import { AdminSession } from '../../admin/admin-session';
import { adminContent, AdminTextKey } from '../../content/admin.data';
import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
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
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  LocalizedText,
  NavigationItem,
  ResumeContent,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';
import { SectionNavigation } from '../../navigation/section-navigation';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { ResumeDownload } from '../resume-download/resume-download';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';

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
    en: 'Open menu',
    es: 'Abrir menú',
  },
  closeMenu: {
    en: 'Close menu',
    es: 'Cerrar menú',
  },
} as const satisfies Record<string, LocalizedText>;

type HeaderLabel = keyof typeof headerLabels;

@Component({
  selector: 'app-site-header',
  imports: [LanguageSwitcher, ResumeDownload, RouterLink, RouterLinkActive, ThemeSwitcher],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  protected readonly adminSession = inject(AdminSession);
  protected readonly logoutBusy = signal(false);
  protected readonly logoutError = signal(false);
  private readonly router = inject(Router);
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

  constructor() {
    afterNextRender(() => { void this.adminSession.restore().catch(() => {}); });
  }

  protected adminLabel(key: AdminTextKey): string {
    return this.localize(adminContent[key]);
  }

  protected async logout(): Promise<void> {
    if (this.logoutBusy()) return;
    this.logoutBusy.set(true); this.logoutError.set(false);
    try {
      await this.adminSession.logout();
      this.closeMenu();
      await this.router.navigate(['/'], { queryParams: this.homeQueryParams() });
    } catch { this.logoutError.set(true); }
    finally { this.logoutBusy.set(false); }
  }

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
