import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { HeroContent, LocalizedText, selectLocalizedText } from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  private readonly languageState = inject(LanguageState);

  readonly content = input.required<HeroContent>();

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
