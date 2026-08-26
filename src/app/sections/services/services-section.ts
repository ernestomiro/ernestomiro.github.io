import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import {
  LocalizedText,
  selectLocalizedText,
  ServicesContent,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSection {
  private readonly languageState = inject(LanguageState);

  readonly content = input.required<ServicesContent>();

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
