import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CaseStudyDiagram } from '../../../content/case-studies/case-study.models';
import {
  LocalizedText,
  selectLocalizedText,
} from '../../../content/portfolio-content.models';
import { LanguageState } from '../../../language/language-state';

@Component({
  selector: 'app-case-study-diagram',
  templateUrl: './case-study-diagram.html',
  styleUrl: './case-study-diagram.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyDiagramComponent {
  private readonly languageState = inject(LanguageState);

  readonly diagram = input.required<CaseStudyDiagram>();

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
