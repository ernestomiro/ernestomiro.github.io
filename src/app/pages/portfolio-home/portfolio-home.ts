import { ChangeDetectionStrategy, Component } from '@angular/core';
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
import { AboutSection } from '../../sections/about/about-section';
import { ContactSection } from '../../sections/contact/contact-section';
import { ExpertiseSection } from '../../sections/expertise/expertise-section';
import { ExperienceSection } from '../../sections/experience/experience-section';
import { HeroSection } from '../../sections/hero/hero-section';
import { ProjectsSection } from '../../sections/projects/projects-section';
import { ServicesSection } from '../../sections/services/services-section';
import { TechnologiesSection } from '../../sections/technologies/technologies-section';
import { SectionDepth } from './section-depth';
import { SectionReveal } from './section-reveal';

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
  protected readonly heroContent = heroContent;
  protected readonly aboutContent = aboutContent;
  protected readonly expertiseContent = expertiseContent;
  protected readonly technologiesContent = technologiesContent;
  protected readonly projectsContent = projectsContent;
  protected readonly experienceContent = experienceContent;
  protected readonly servicesContent = servicesContent;
  protected readonly contactContent = contactContent;
}
