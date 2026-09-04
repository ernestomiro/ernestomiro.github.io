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
  | 'capabilities'
  | 'services'
  | 'contact';

export type NavigationSectionId = Extract<
  SectionId,
  'projects' | 'capabilities' | 'services' | 'contact'
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

export interface CapabilitiesContent {
  readonly title: LocalizedText;
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

export interface TeamDeliveryContent {
  readonly label: LocalizedText;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
  readonly tools: LocalizedText;
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

export type ContactChannelKind = 'email' | 'message';

interface ContactChannelBase {
  readonly id: ContentId;
  readonly kind: ContactChannelKind;
  readonly label: LocalizedText;
  readonly accessibleName: LocalizedText;
}

export interface DirectContactChannel extends ContactChannelBase {
  readonly kind: 'email';
  readonly displayValue: string;
  readonly href: string;
}

export interface RouteContactChannel extends ContactChannelBase {
  readonly kind: 'message';
  readonly displayValue: LocalizedText;
  readonly path: `/${string}`;
}

export type ContactChannel = DirectContactChannel | RouteContactChannel;

export interface ContactContent {
  readonly title: LocalizedText;
  readonly introduction?: LocalizedText;
  readonly channels: readonly ContactChannel[];
}

export type ResumeVariantId = 'ats' | 'executive';

export interface ResumeOption {
  readonly id: ResumeVariantId;
  readonly label: LocalizedText;
  readonly accessibleName: LocalizedText;
  readonly href: LocalizedText;
  readonly fileName: LocalizedText;
}

export interface ResumeContent {
  readonly label: LocalizedText;
  readonly options: readonly ResumeOption[];
}

export interface FooterContent {
  readonly name: string;
  readonly resume: ResumeContent;
  readonly copyrightOwner: string;
}

export interface PortfolioContent {
  readonly navigation: readonly NavigationItem[];
  readonly hero: HeroContent;
  readonly about: AboutContent;
  readonly capabilities: CapabilitiesContent;
  readonly expertise: ExpertiseContent;
  readonly technologies: TechnologiesContent;
  readonly projects: ProjectsContent;
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
