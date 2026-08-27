import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MethodologyTeaser } from '../../content/methodology/methodology.models';
import {
  ExpertiseContent,
  LocalizedText,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';

@Component({
  selector: 'app-expertise-section',
  imports: [RouterLink],
  templateUrl: './expertise-section.html',
  styleUrl: './expertise-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpertiseSection {
  private readonly languageState = inject(LanguageState);

  readonly content = input.required<ExpertiseContent>();
  readonly methodology = input.required<MethodologyTeaser>();

  protected readonly methodologyQueryParams = computed(() =>
    this.languageState.language() === 'es' ? { lang: 'es' } : null,
  );

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
