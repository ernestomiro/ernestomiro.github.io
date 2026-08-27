import { LocalizedText } from '../portfolio-content.models';

export interface MethodologyMetadata {
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

export interface MethodologyTeaser {
  readonly label: LocalizedText;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
  readonly actionLabel: LocalizedText;
  readonly path: `/${string}`;
}

export interface MethodologyHero {
  readonly backLabel: LocalizedText;
  readonly label: LocalizedText;
  readonly headline: LocalizedText;
  readonly lead: LocalizedText;
}

export interface MethodologyStage {
  readonly id: string;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

export interface MethodologyWorkflow {
  readonly title: LocalizedText;
  readonly introduction: LocalizedText;
  readonly stages: readonly MethodologyStage[];
}

export interface MethodologyNarrative {
  readonly title: LocalizedText;
  readonly body: LocalizedText;
}

export interface MethodologyEvidenceItem {
  readonly id: string;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

export interface MethodologyEvidence {
  readonly title: LocalizedText;
  readonly items: readonly MethodologyEvidenceItem[];
}

export interface MethodologyAction {
  readonly label: LocalizedText;
  readonly fragment: 'projects' | 'contact';
}

export interface MethodologyClosing extends MethodologyNarrative {
  readonly primaryAction: MethodologyAction;
  readonly secondaryAction: MethodologyAction;
}

export interface MethodologyContent {
  readonly metadata: MethodologyMetadata;
  readonly teaser: MethodologyTeaser;
  readonly hero: MethodologyHero;
  readonly workflow: MethodologyWorkflow;
  readonly humanGate: MethodologyNarrative;
  readonly evidence: MethodologyEvidence;
  readonly closing: MethodologyClosing;
}

