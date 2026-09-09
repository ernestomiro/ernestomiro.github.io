import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  AiCapabilitiesContent,
  LocalizedText,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';

@Component({
  selector: 'app-ai-section',
  imports: [RouterLink],
  templateUrl: './ai-section.html',
  styleUrl: './ai-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiSection {
  private readonly languageState = inject(LanguageState);

  readonly content = input.required<AiCapabilitiesContent>();

  protected readonly queryParams = computed(() =>
    this.languageState.language() === 'es' ? { lang: 'es' } : null,
  );

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
