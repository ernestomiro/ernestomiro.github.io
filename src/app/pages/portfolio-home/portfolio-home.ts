import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import {
  aboutContent,
  contactContent,
  expertiseContent,
  experienceContent,
  heroContent,
  projectsContent,
  servicesContent,
  technologiesContent,
} from '../../content/portfolio-content.data';
import { LanguageCode } from '../../content/portfolio-content.models';
import { AboutSection } from '../../sections/about/about-section';
import { ContactSection } from '../../sections/contact/contact-section';
import { ExpertiseSection } from '../../sections/expertise/expertise-section';
import { ExperienceSection } from '../../sections/experience/experience-section';
import { HeroSection } from '../../sections/hero/hero-section';
import { ProjectsSection } from '../../sections/projects/projects-section';
import { ServicesSection } from '../../sections/services/services-section';
import { TechnologiesSection } from '../../sections/technologies/technologies-section';
import { LanguageState } from '../../language/language-state';
import { PageMetadata } from '../../metadata/page-metadata';
import { SectionDepth } from './section-depth';
import { SectionReveal } from './section-reveal';

const homeMetadata = {
  en: {
    title: 'Ernesto Miro Peraza | Senior Software Engineer',
    description:
      'Senior software engineer specializing in full-stack development, enterprise software, cloud architecture, SaaS platforms, integrations, and technical leadership.',
  },
  es: {
    title: 'Ernesto Miro Peraza | Ingeniero de Software Senior',
    description:
      'Ingeniero de software senior especializado en desarrollo Full Stack, software empresarial, arquitectura cloud, plataformas SaaS, integraciones y liderazgo técnico.',
  },
} as const satisfies Readonly<
  Record<LanguageCode, { readonly title: string; readonly description: string }>
>;

@Component({
  selector: 'app-portfolio-home',
  imports: [
    AboutSection,
    ContactSection,
    ExpertiseSection,
    ExperienceSection,
    HeroSection,
    ProjectsSection,
    SectionDepth,
    SectionReveal,
    ServicesSection,
    TechnologiesSection,
  ],
  templateUrl: './portfolio-home.html',
  styleUrl: './portfolio-home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioHomePage {
  private readonly languageState = inject(LanguageState);
  private readonly pageMetadata = inject(PageMetadata);

  protected readonly heroContent = heroContent;
  protected readonly aboutContent = aboutContent;
  protected readonly expertiseContent = expertiseContent;
  protected readonly technologiesContent = technologiesContent;
  protected readonly projectsContent = projectsContent;
  protected readonly experienceContent = experienceContent;
  protected readonly servicesContent = servicesContent;
  protected readonly contactContent = contactContent;

  private readonly metadataEffect = effect(() => {
    const language = this.languageState.language();

    this.pageMetadata.update({
      ...homeMetadata[language],
      canonicalPath: '/',
      language,
    });
  });
}
