import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findCaseStudyBySlug } from '../../content/case-studies/case-studies.data';
import { LocalizedText, selectLocalizedText } from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';
import { PageMetadata } from '../../metadata/page-metadata';
import { CaseStudyDiagramComponent } from './case-study-diagram/case-study-diagram';

const pageLabels = {
  backToProjects: { en: 'Back to projects', es: 'Volver a proyectos' },
  context: { en: 'Context', es: 'Contexto' },
  problem: { en: 'Challenge', es: 'Reto' },
  roleAndScope: { en: 'My role', es: 'Mi rol' },
  solutionAndArchitecture: { en: 'Approach', es: 'Enfoque' },
  technologies: { en: 'Technologies', es: 'Tecnologías' },
  engineeringQuality: { en: 'Engineering quality', es: 'Calidad de ingeniería' },
  outcome: { en: 'Technical outcome', es: 'Resultado técnico' },
  systemMaps: { en: 'System maps', es: 'Mapas del sistema' },
  decisionsAndTradeoffs: {
    en: 'Decisions & tradeoffs',
    es: 'Decisiones y tradeoffs',
  },
  tradeoff: { en: 'Tradeoff', es: 'Tradeoff' },
  challenges: { en: 'Technical challenges', es: 'Retos técnicos' },
  notFoundTitle: { en: 'Project not found', es: 'Proyecto no encontrado' },
  notFoundMessage: {
    en: 'The requested case study is not available.',
    es: 'El caso de estudio solicitado no está disponible.',
  },
} as const satisfies Record<string, LocalizedText>;

type PageLabel = keyof typeof pageLabels;

@Component({
  selector: 'app-case-study',
  imports: [CaseStudyDiagramComponent, RouterLink],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyPage {
  private readonly document = inject(DOCUMENT);
  private readonly route = inject(ActivatedRoute);
  private readonly languageState = inject(LanguageState);
  private readonly pageMetadata = inject(PageMetadata);
  private readonly routeParams = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  private readonly pageHeading = viewChild.required<ElementRef<HTMLHeadingElement>>('pageHeading');

  protected readonly caseStudy = computed(() => {
    const slug = this.routeParams().get('slug');

    return slug ? findCaseStudyBySlug(slug) : undefined;
  });

  protected readonly backQueryParams = computed(() =>
    this.languageState.language() === 'es' ? { lang: 'es' } : null,
  );

  private readonly metadataEffect = effect(() => {
    const language = this.languageState.language();
    const caseStudy = this.caseStudy();

    if (caseStudy) {
      this.pageMetadata.update({
        title: `${selectLocalizedText(caseStudy.title, language)} | Ernesto Miro Peraza`,
        description: selectLocalizedText(caseStudy.summary, language),
        canonicalPath: `/projects/${caseStudy.slug}`,
        language,
      });

      return;
    }

    this.pageMetadata.update({
      title: `${selectLocalizedText(pageLabels.notFoundTitle, language)} | Ernesto Miro Peraza`,
      description: selectLocalizedText(pageLabels.notFoundMessage, language),
      canonicalPath: '/404',
      language,
    });
  });

  constructor() {
    afterNextRender(() => {
      this.document.defaultView?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      this.pageHeading().nativeElement.focus({ preventScroll: true });
    });
  }

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }

  protected label(label: PageLabel): string {
    return this.localize(pageLabels[label]);
  }
}
