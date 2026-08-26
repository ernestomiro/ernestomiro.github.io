import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import {
  LocalizedText,
  selectLocalizedText,
  TechnologiesContent,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';

@Component({
  selector: 'app-technologies-section',
  templateUrl: './technologies-section.html',
  styleUrl: './technologies-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesSection {
  private readonly languageState = inject(LanguageState);

  readonly content = input.required<TechnologiesContent>();

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
