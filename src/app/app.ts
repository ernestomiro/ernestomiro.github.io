import {
  afterNextRender,
  Component,
  computed,
  inject,
  OnDestroy,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  footerContent,
  navigationContent,
  resumeContent,
} from './content/portfolio-content.data';
import {
  LocalizedText,
  selectLocalizedText,
} from './content/portfolio-content.models';
import { SiteHeader } from './layout/site-header/site-header';
import { SiteFooter } from './layout/site-footer/site-footer';
import { LanguageState } from './language/language-state';
import { SectionNavigation } from './navigation/section-navigation';

const skipLinkText = {
  en: 'Skip to main content',
  es: 'Saltar al contenido principal',
} as const satisfies LocalizedText;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteFooter, SiteHeader],
  providers: [LanguageState],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnDestroy {
  private readonly languageState = inject(LanguageState);
  private readonly sectionNavigation = inject(SectionNavigation);
  protected readonly navigationContent = navigationContent;
  protected readonly resumeContent = resumeContent;
  protected readonly footerContent = footerContent;
  protected readonly skipLinkLabel = computed(() =>
    selectLocalizedText(skipLinkText, this.languageState.language()),
  );

  constructor() {
    afterNextRender(() => this.sectionNavigation.start());
  }

  ngOnDestroy(): void {
    this.sectionNavigation.stop();
  }
}
