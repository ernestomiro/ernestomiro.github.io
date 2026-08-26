import { afterNextRender, Component, inject, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { footerContent, navigationContent } from './content/portfolio-content.data';
import { SiteHeader } from './layout/site-header/site-header';
import { SiteFooter } from './layout/site-footer/site-footer';
import { LanguageState } from './language/language-state';
import { SectionNavigation } from './navigation/section-navigation';

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
  protected readonly footerContent = footerContent;

  constructor() {
    afterNextRender(() => this.sectionNavigation.start());
  }

  ngOnDestroy(): void {
    this.sectionNavigation.stop();
  }
}
