import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import {
  LocalizedText,
  ProjectsContent,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';
import { ProjectCard } from './project-card/project-card';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  private readonly languageState = inject(LanguageState);

  readonly content = input.required<ProjectsContent>();

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
