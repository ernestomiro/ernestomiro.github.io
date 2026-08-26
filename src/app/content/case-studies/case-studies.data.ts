import { CaseStudy, CaseStudySlug } from './case-study.models';
import { pc01CaseStudy } from './pc-01.data';
import { pc02CaseStudy } from './pc-02.data';

const caseStudySlugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const publishedCaseStudies = [
  pc01CaseStudy,
  pc02CaseStudy,
] as const satisfies readonly CaseStudy[];

function assertValidCaseStudies(caseStudies: readonly CaseStudy[]): void {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const caseStudy of caseStudies) {
    if (ids.has(caseStudy.id)) {
      throw new Error(`Duplicate case study id: ${caseStudy.id}`);
    }

    if (!caseStudySlugPattern.test(caseStudy.slug)) {
      throw new Error(`Invalid case study slug: ${caseStudy.slug}`);
    }

    if (slugs.has(caseStudy.slug)) {
      throw new Error(`Duplicate case study slug: ${caseStudy.slug}`);
    }

    ids.add(caseStudy.id);
    slugs.add(caseStudy.slug);
  }
}

assertValidCaseStudies(publishedCaseStudies);

export const caseStudies: readonly CaseStudy[] = publishedCaseStudies;

export const caseStudySlugs: readonly CaseStudySlug[] = caseStudies.map(
  ({ slug }) => slug,
);

export function findCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
