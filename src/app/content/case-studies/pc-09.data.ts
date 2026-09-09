import { CaseStudy } from './case-study.models';

export const pc09CaseStudy = {
  id: 'enterprise-systems-xetid',
  slug: 'enterprise-systems-xetid',
  title: {
    en: 'Enterprise Systems — XETID',
    es: 'Sistemas empresariales — XETID',
  },
  role: {
    en: 'Full-Stack Development & Requirements Analysis',
    es: 'Desarrollo Full Stack y análisis de requisitos',
  },
  summary: {
    en: 'I turned enterprise software requirements into features and maintenance improvements, working with a multidisciplinary team to keep the interface, logic, and data consistent.',
    es: 'Convertí requisitos de software empresarial en funcionalidades y mejoras de mantenimiento, trabajando junto a un equipo multidisciplinario para mantener coherentes la interfaz, la lógica y los datos.',
  },
  period: '2017–2019',
  context: {
    en: 'At XETID, I contributed to enterprise software development and maintenance within a multidisciplinary team.',
    es: 'En XETID contribuí al desarrollo y mantenimiento de software empresarial dentro de un equipo multidisciplinario.',
  },
  problem: {
    en: 'Functional and technical requirements needed to become coherent changes across backend, frontend and data.',
    es: 'Los requisitos funcionales y técnicos debían convertirse en cambios coherentes entre backend, frontend y datos.',
  },
  roleAndScope: {
    en: 'I worked as a Project Specialist across requirements analysis, implementation, maintenance and technical problem solving.',
    es: 'Trabajé como especialista de proyecto en análisis de requisitos, implementación, mantenimiento y resolución de problemas técnicos.',
  },
  solutionAndArchitecture: {
    en: 'I implemented focused features and maintenance changes with PostgreSQL, Zend Framework, Ext JS and Bootstrap.',
    es: 'Implementé funcionalidades y cambios de mantenimiento concretos con PostgreSQL, Zend Framework, Ext JS y Bootstrap.',
  },
  technologies: [
    {
      id: 'backend-and-data',
      label: { en: 'Backend & data', es: 'Backend y datos' },
      items: ['Zend Framework', 'PostgreSQL'],
    },
    {
      id: 'frontend',
      label: { en: 'Frontend', es: 'Frontend' },
      items: ['Ext JS', 'Bootstrap'],
    },
  ],
} as const satisfies CaseStudy;
