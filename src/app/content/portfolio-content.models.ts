export const supportedLanguageCodes = ['en', 'es'] as const;

export type LanguageCode = (typeof supportedLanguageCodes)[number];

export const defaultLanguage: LanguageCode = 'en';

export type LocalizedText = Readonly<Record<LanguageCode, string>>;

export type SectionId =
  | 'top'
  | 'about'
  | 'expertise'
  | 'technologies'
  | 'projects'
  | 'experience'
  | 'services'
  | 'contact';

export type NavigationSectionId = Extract<
  SectionId,
  'projects' | 'experience' | 'services' | 'contact'
>;

export type SectionHref = `#${SectionId}`;
export type ContentId = string;

export interface ActionLink {
  readonly label: LocalizedText;
  readonly href: SectionHref;
}

export interface NavigationItem {
  readonly id: NavigationSectionId;
  readonly label: LocalizedText;
  readonly href: SectionHref;
}

export interface HeroContent {
  readonly headline: LocalizedText;
  readonly lead: LocalizedText;
  readonly primaryAction: ActionLink;
  readonly secondaryAction: ActionLink;
}

export interface AboutContent {
  readonly title: LocalizedText;
  readonly paragraphs: readonly LocalizedText[];
}

export interface Capability {
  readonly id: ContentId;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

export interface ExpertiseContent {
  readonly title: LocalizedText;
  readonly introduction?: LocalizedText;
  readonly items: readonly Capability[];
}

export interface TechnologyGroup {
  readonly id: ContentId;
  readonly label: LocalizedText;
  readonly items: readonly string[];
}

export interface TechnologiesContent {
  readonly title: LocalizedText;
  readonly introduction: LocalizedText;
  readonly groups: readonly TechnologyGroup[];
}

export interface ProjectSummary {
  readonly id: ContentId;
  readonly caseStudyId: ContentId;
  readonly slug: string;
  readonly title: LocalizedText;
  readonly summary: LocalizedText;
  readonly role: LocalizedText;
  readonly period?: string;
}

export interface ProjectsContent {
  readonly title: LocalizedText;
  readonly introduction?: LocalizedText;
  readonly items: readonly ProjectSummary[];
}

export interface ExperienceEntry {
  readonly id: ContentId;
  readonly title: LocalizedText;
  readonly period: string;
  readonly role: LocalizedText;
  readonly summary: LocalizedText;
}

export interface ExperienceContent {
  readonly title: LocalizedText;
  readonly introduction?: LocalizedText;
  readonly items: readonly ExperienceEntry[];
}

export interface ServiceItem {
  readonly id: ContentId;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

export interface ServicesContent {
  readonly title: LocalizedText;
  readonly introduction: LocalizedText;
  readonly items: readonly ServiceItem[];
  readonly contactAction: ActionLink;
}

export type ContactChannelKind = 'email' | 'phone';

export interface ContactChannel {
  readonly id: ContentId;
  readonly kind: ContactChannelKind;
  readonly label: LocalizedText;
  readonly displayValue: string;
  readonly href: string;
  readonly accessibleName: LocalizedText;
}

export interface ContactContent {
  readonly title: LocalizedText;
  readonly introduction?: LocalizedText;
  readonly channels: readonly ContactChannel[];
}

export interface FooterContent {
  readonly name: string;
  readonly resumeLabel: LocalizedText;
  readonly resumeHref: string;
  readonly resumeFileName: string;
  readonly copyrightOwner: string;
}

export interface PortfolioContent {
  readonly navigation: readonly NavigationItem[];
  readonly hero: HeroContent;
  readonly about: AboutContent;
  readonly expertise: ExpertiseContent;
  readonly technologies: TechnologiesContent;
  readonly projects: ProjectsContent;
  readonly experience: ExperienceContent;
  readonly services: ServicesContent;
  readonly contact: ContactContent;
  readonly footer: FooterContent;
}

export function isLanguageCode(value: string | null): value is LanguageCode {
  return supportedLanguageCodes.some((language) => language === value);
}

export function selectLocalizedText(text: LocalizedText, language: LanguageCode): string {
  return text[language];
}
