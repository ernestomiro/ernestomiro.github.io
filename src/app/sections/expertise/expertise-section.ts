import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import {
  ExpertiseContent,
  LocalizedText,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';

@Component({
  selector: 'app-expertise-section',
  templateUrl: './expertise-section.html',
  styleUrl: './expertise-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpertiseSection {
  private readonly languageState = inject(LanguageState);

  readonly content = input.required<ExpertiseContent>();

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
