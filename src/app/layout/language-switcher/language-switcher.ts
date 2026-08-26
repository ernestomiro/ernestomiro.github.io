import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import {
  LanguageCode,
  LocalizedText,
  selectLocalizedText,
  supportedLanguageCodes,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';

const groupLabel = {
  en: 'Language selection',
  es: 'Selección de idioma',
} as const satisfies LocalizedText;

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcher {
  private readonly languageState = inject(LanguageState);

  protected readonly languages = supportedLanguageCodes;
  protected readonly currentLanguage = this.languageState.language;
  protected readonly accessibleGroupLabel = computed(() =>
    selectLocalizedText(groupLabel, this.currentLanguage()),
  );

  protected select(language: LanguageCode): void {
    this.languageState.select(language);
  }
}
