import { CaseStudyScreenshot } from './case-studies/case-study.models';
import { LocalizedText } from './portfolio-content.models';

export const portfolioPreview = {
  id: 'this-portfolio',
  title: { en: 'This portfolio', es: 'Este portafolio' },
  // Portfolio sections, including AI after capabilities, then interface examples.
  screenshots: [
    {
      id: 'hero',
      src: '/images/portfolio/hero.png',
      width: 2136,
      height: 1072,
      caption: { en: 'Hero', es: 'Hero' },
      alt: {
        en: 'Portfolio home hero in the slate-blue theme, with introduction and project carousel.',
        es: 'Hero del portafolio en la paleta azul pizarra, con presentación y carrusel de proyectos.',
      },
    },
    {
      id: 'services',
      src: '/images/portfolio/services.png',
      width: 2121,
      height: 1071,
      caption: { en: 'Services', es: 'Servicios' },
      alt: {
        en: 'Portfolio services and typical engagements in the slate-blue theme.',
        es: 'Servicios y formas habituales de colaboración del portafolio en la paleta azul pizarra.',
      },
    },
    {
      id: 'capabilities',
      src: '/images/portfolio/capabilities.png',
      width: 2151,
      height: 1073,
      caption: { en: 'Capabilities', es: 'Capacidades' },
      alt: {
        en: 'Portfolio capabilities, expertise and team delivery in the warm beige theme.',
        es: 'Capacidades, experiencia técnica y trabajo en equipo del portafolio en la paleta beige.',
      },
    },
    {
      id: 'ai',
      src: '/images/portfolio/ai.png',
      width: 2132,
      height: 1102,
      caption: { en: 'Artificial intelligence', es: 'Inteligencia artificial' },
      alt: {
        en: 'Artificial intelligence section within the portfolio capabilities.',
        es: 'Sección de inteligencia artificial dentro de las capacidades del portafolio.',
      },
    },
    {
      id: 'contact',
      src: '/images/portfolio/contact.png',
      width: 2123,
      height: 1077,
      caption: { en: 'Contact', es: 'Contacto' },
      alt: {
        en: 'Portfolio contact options and footer in the beige and dark theme.',
        es: 'Opciones de contacto y pie del portafolio en la paleta beige y oscura.',
      },
    },
    {
      id: 'interface-examples',
      src: '/images/portfolio/interface-examples.png',
      width: 2132,
      height: 1073,
      caption: { en: 'Interface examples', es: 'Ejemplos de interfaces' },
      alt: {
        en: 'Portfolio case study interface carousel in the green theme.',
        es: 'Carrusel de interfaces de un caso de estudio del portafolio en la paleta verde.',
      },
    },
    {
      id: 'technologies',
      src: '/images/portfolio/technologies.png',
      width: 2136,
      height: 1072,
      caption: { en: 'Technologies', es: 'Tecnologías' },
      alt: {
        en: 'Portfolio case study technologies and technical outcome in the green theme.',
        es: 'Tecnologías y resultado técnico de un caso de estudio del portafolio en la paleta verde.',
      },
    },
  ],
} as const satisfies {
  readonly id: string;
  readonly title: LocalizedText;
  readonly screenshots: readonly CaseStudyScreenshot[];
};
