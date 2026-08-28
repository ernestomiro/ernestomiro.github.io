import { caseStudies } from './case-studies/case-studies.data';
import {
  AboutContent,
  CapabilitiesContent,
  ContactContent,
  ExpertiseContent,
  FooterContent,
  HeroContent,
  NavigationItem,
  ProjectsContent,
  ResumeContent,
  ServicesContent,
  TechnologiesContent,
} from './portfolio-content.models';

export const navigationContent = [
  {
    id: 'services',
    label: { en: 'Services', es: 'Servicios' },
    href: '#services',
  },
  {
    id: 'projects',
    label: { en: 'Projects', es: 'Proyectos' },
    href: '#projects',
  },
  {
    id: 'capabilities',
    label: { en: 'Capabilities', es: 'Capacidades' },
    href: '#capabilities',
  },
  {
    id: 'contact',
    label: { en: 'Contact', es: 'Contacto' },
    href: '#contact',
  },
] as const satisfies readonly NavigationItem[];

export const heroContent = {
  headline: {
    en: 'Clear software for complex business challenges.',
    es: 'Software claro para desafíos empresariales complejos.',
  },
  lead: {
    en: 'I build new software and improve existing systems—from targeted changes and integrations to complete business applications.',
    es: 'Construyo software nuevo y mejoro sistemas existentes: desde cambios puntuales e integraciones hasta aplicaciones empresariales completas.',
  },
  primaryAction: {
    label: {
      en: 'Explore my work',
      es: 'Conocer mi trabajo',
    },
    href: '#projects',
  },
  secondaryAction: {
    label: {
      en: 'Let’s talk',
      es: 'Hablemos',
    },
    href: '#contact',
  },
} as const satisfies HeroContent;

export const aboutContent = {
  title: {
    en: 'About',
    es: 'Sobre mí',
  },
  paragraphs: [
    {
      en: 'I’m a full-stack software developer focused on business applications and complex systems. I work on both new products and existing software, designing, extending, integrating, and modernizing applications with a practical approach to architecture and long-term evolution.',
      es: 'Soy desarrollador de software Full Stack enfocado en aplicaciones empresariales y sistemas complejos. Trabajo tanto en productos nuevos como en software existente, diseñando, ampliando, integrando y modernizando aplicaciones con un enfoque práctico de arquitectura y evolución a largo plazo.',
    },
  ],
} as const satisfies AboutContent;

export const capabilitiesContent = {
  title: {
    en: 'Capabilities',
    es: 'Capacidades',
  },
} as const satisfies CapabilitiesContent;

export const expertiseContent = {
  title: {
    en: 'Expertise',
    es: 'Especialización',
  },
  items: [
    {
      id: 'business-applications',
      title: {
        en: 'Business Applications',
        es: 'Aplicaciones empresariales',
      },
      description: {
        en: 'Building clear, reliable software around complex business processes and operational needs.',
        es: 'Crear software claro y confiable alrededor de procesos y necesidades operativas complejas.',
      },
    },
    {
      id: 'software-evolution',
      title: {
        en: 'Software Evolution',
        es: 'Evolución de software',
      },
      description: {
        en: 'Improving existing systems through targeted changes, new capabilities, modernization, and maintainable architecture.',
        es: 'Mejorar sistemas existentes mediante cambios puntuales, nuevas capacidades, modernización y arquitectura mantenible.',
      },
    },
    {
      id: 'integrations-and-apis',
      title: {
        en: 'Integrations & APIs',
        es: 'Integraciones y APIs',
      },
      description: {
        en: 'Connecting applications, services, and data through reliable integrations and well-defined contracts.',
        es: 'Conectar aplicaciones, servicios y datos mediante integraciones confiables y contratos bien definidos.',
      },
    },
    {
      id: 'end-to-end-development',
      title: {
        en: 'End-to-End Development',
        es: 'Desarrollo integral',
      },
      description: {
        en: 'Taking features from logic and data through to coherent, usable user experiences.',
        es: 'Llevar funcionalidades desde la lógica y los datos hasta experiencias de usuario coherentes y utilizables.',
      },
    },
  ],
} as const satisfies ExpertiseContent;

export const technologiesContent = {
  title: {
    en: 'Main Technologies',
    es: 'Tecnologías principales',
  },
  introduction: {
    en: 'A representative selection from my broader technical experience. The right tools depend on each system’s needs.',
    es: 'Una selección representativa de mi experiencia técnica. Las herramientas adecuadas dependen de las necesidades de cada sistema.',
  },
  groups: [
    {
      id: 'backend-and-apis',
      label: {
        en: 'Backend & APIs',
        es: 'Backend y APIs',
      },
      items: [
        'C# / .NET',
        'ASP.NET Core',
        'Node.js',
        'Express.js',
        'REST APIs',
        'gRPC',
        'GraphQL',
        'Apollo Server',
        'Swagger / OpenAPI',
        'GraphQL Code Generator',
        'Firebase Admin SDK',
        'FluentValidation',
        'SSH.NET',
      ],
    },
    {
      id: 'frontend',
      label: {
        en: 'Frontend',
        es: 'Frontend',
      },
      items: ['Angular', 'TypeScript', 'RxJS', 'Angular Signals', 'Angular Material'],
    },
    {
      id: 'data',
      label: {
        en: 'Data',
        es: 'Datos',
      },
      items: [
        'Microsoft SQL Server',
        'PostgreSQL',
        'Entity Framework Core',
        'Firestore',
        'BigQuery',
        'Redis',
      ],
    },
    {
      id: 'google-cloud',
      label: {
        en: 'Google Cloud',
        es: 'Google Cloud',
      },
      items: [
        'Google Cloud Run',
        'Google Cloud Pub/Sub',
        'Google Cloud Tasks',
        'Google Cloud Scheduler',
        'Google Cloud Functions / Firebase Functions',
        'Google Cloud Build',
        'Google Secret Manager',
        'Google Cloud KMS',
        'Google Cloud Logging & Monitoring',
        'Google Cloud Storage',
        'Google Compute Engine',
      ],
    },
    {
      id: 'cloud-and-delivery',
      label: {
        en: 'Cloud & Delivery',
        es: 'Cloud y entrega',
      },
      items: [
        'Microsoft Azure',
        'Terraform',
        'Docker',
        'CI/CD',
      ],
    },
    {
      id: 'real-time-communication',
      label: {
        en: 'Real-Time Communication',
        es: 'Comunicación en tiempo real',
      },
      items: ['Server-Sent Events', 'WebSockets', 'GraphQL Subscriptions'],
    },
    {
      id: 'identity-and-security',
      label: {
        en: 'Identity & Security',
        es: 'Identidad y seguridad',
      },
      items: [
        'OAuth 2.0',
        'OpenID Connect',
        'SAML 2.0',
        'JWT',
        'Microsoft Entra ID',
        'Microsoft Authentication Library',
      ],
    },
    {
      id: 'testing-and-quality',
      label: {
        en: 'Testing & Quality',
        es: 'Pruebas y calidad',
      },
      items: ['xUnit', 'Moq', 'Jasmine / Karma', 'Mocha / Chai'],
    },
    {
      id: 'specialized-integrations',
      label: {
        en: 'Specialized Integrations',
        es: 'Integraciones especializadas',
      },
      items: [
        'LTI',
        'Clever',
        'ClassLink / OneRoster',
        'Google Workspace',
        'Google Admin Directory',
        'Google Classroom API',
      ],
    },
  ],
} as const satisfies TechnologiesContent;

export const projectsContent = {
  title: {
    en: 'Projects / Case Studies',
    es: 'Proyectos / Casos de estudio',
  },
  items: caseStudies.map(({ id, slug, title, role, summary, period }) => ({
    id,
    caseStudyId: id,
    slug,
    title,
    role,
    summary,
    period,
  })),
} satisfies ProjectsContent;

export const servicesContent = {
  title: {
    en: 'Services',
    es: 'Servicios',
  },
  introduction: {
    en: 'I work on complete applications, defined phases, and focused improvements—adapting the scope to what each system actually needs.',
    es: 'Trabajo en aplicaciones completas, fases definidas y mejoras puntuales, adaptando el alcance a lo que cada sistema realmente necesita.',
  },
  items: [
    {
      id: 'custom-business-software',
      title: {
        en: 'Custom Business Software',
        es: 'Software empresarial a medida',
      },
      description: {
        en: 'New applications and modules designed around real workflows, data, and operational needs.',
        es: 'Aplicaciones y módulos nuevos diseñados alrededor de flujos, datos y necesidades operativas reales.',
      },
    },
    {
      id: 'existing-software-evolution',
      title: {
        en: 'Existing Software Evolution',
        es: 'Evolución de software existente',
      },
      description: {
        en: 'Targeted changes, new capabilities, and modernization without assuming a complete rewrite.',
        es: 'Cambios puntuales, nuevas funcionalidades y modernización sin asumir una reescritura completa.',
      },
    },
    {
      id: 'systems-integration',
      title: {
        en: 'Systems Integration',
        es: 'Integración de sistemas',
      },
      description: {
        en: 'Reliable connections between applications, services, and data through clear, maintainable contracts.',
        es: 'Conexiones confiables entre aplicaciones, servicios y datos mediante contratos claros y mantenibles.',
      },
    },
    {
      id: 'architecture-technical-problem-solving',
      title: {
        en: 'Architecture & Technical Problem Solving',
        es: 'Arquitectura y resolución técnica',
      },
      description: {
        en: 'Architecture review, technical diagnosis, and implementation support for complex or constrained systems.',
        es: 'Revisión de arquitectura, diagnóstico técnico y apoyo de implementación para sistemas complejos o con restricciones.',
      },
    },
  ],
  contactAction: {
    label: {
      en: 'Let’s talk',
      es: 'Hablemos',
    },
    href: '#contact',
  },
} as const satisfies ServicesContent;

export const contactContent = {
  title: {
    en: 'Contact',
    es: 'Contacto',
  },
  channels: [
    {
      id: 'email',
      kind: 'email',
      label: {
        en: 'Email',
        es: 'Correo electrónico',
      },
      displayValue: 'emiroperaza@gmail.com',
      href: 'mailto:emiroperaza@gmail.com',
      accessibleName: {
        en: 'Send an email to emiroperaza@gmail.com',
        es: 'Enviar un correo a emiroperaza@gmail.com',
      },
    },
    {
      id: 'phone',
      kind: 'phone',
      label: {
        en: 'Phone',
        es: 'Teléfono',
      },
      displayValue: '+52 33 1788 8852',
      href: 'tel:+523317888852',
      accessibleName: {
        en: 'Call +52 33 1788 8852',
        es: 'Llamar al +52 33 1788 8852',
      },
    },
  ],
} as const satisfies ContactContent;

export const resumeContent = {
  label: {
    en: 'Download resume (English)',
    es: 'Descargar CV (inglés)',
  },
  href: '/documents/ernesto-miro-resume-en.pdf',
  fileName: 'Ernesto_Miro_Peraza_Resume_EN.pdf',
} as const satisfies ResumeContent;

export const footerContent = {
  name: 'Ernesto Miró Peraza',
  resume: resumeContent,
  copyrightOwner: 'Ernesto Miró Peraza',
} as const satisfies FooterContent;
