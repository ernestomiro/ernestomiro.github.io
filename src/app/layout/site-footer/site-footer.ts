import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import {
  FooterContent,
  LocalizedText,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  private readonly languageState = inject(LanguageState);

  readonly content = input.required<FooterContent>();

  protected readonly currentYear = new Date().getFullYear();

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
