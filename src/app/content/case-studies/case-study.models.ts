import { ContentId, LocalizedText } from '../portfolio-content.models';

export type CaseStudyId = ContentId;
export type CaseStudySlug = string;

export interface CaseStudyTechnologyGroup {
  readonly id: ContentId;
  readonly label: LocalizedText;
  readonly items: readonly string[];
  readonly rationale?: LocalizedText;
}

export interface CaseStudyDecision {
  readonly id: ContentId;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
  readonly tradeoff?: LocalizedText;
}

export interface CaseStudyDiagramPath {
  readonly id: ContentId;
  readonly nodes: readonly LocalizedText[];
}

export interface CaseStudyDiagram {
  readonly id: ContentId;
  readonly title: LocalizedText;
  readonly accessibleName: LocalizedText;
  readonly paths: readonly CaseStudyDiagramPath[];
  readonly annotations?: readonly LocalizedText[];
}

export interface CaseStudy {
  readonly id: CaseStudyId;
  readonly slug: CaseStudySlug;
  readonly title: LocalizedText;
  readonly role: LocalizedText;
  readonly summary: LocalizedText;
  readonly period?: string;
  readonly context: LocalizedText;
  readonly problem: LocalizedText;
  readonly roleAndScope: LocalizedText;
  readonly solutionAndArchitecture: LocalizedText;
  readonly technologies: readonly CaseStudyTechnologyGroup[];
  readonly diagrams?: readonly CaseStudyDiagram[];
  readonly decisions?: readonly CaseStudyDecision[];
  readonly challenges?: readonly LocalizedText[];
  readonly engineeringQuality?: LocalizedText;
  readonly outcome?: LocalizedText;
}
