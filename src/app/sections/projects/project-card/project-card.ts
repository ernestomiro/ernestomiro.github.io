import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LocalizedText,
  ProjectSummary,
  selectLocalizedText,
} from '../../../content/portfolio-content.models';
import { LanguageState } from '../../../language/language-state';

const caseStudyAction = {
  en: 'View case study',
  es: 'Ver caso de estudio',
} as const satisfies LocalizedText;

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  private readonly languageState = inject(LanguageState);

  readonly project = input.required<ProjectSummary>();

  protected readonly detailQueryParams = computed(() =>
    this.languageState.language() === 'es' ? { lang: 'es' } : null,
  );

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }

  protected actionLabel(): string {
    return this.localize(caseStudyAction);
  }
}
