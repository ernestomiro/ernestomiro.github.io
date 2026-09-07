import { caseStudies } from './case-studies/case-studies.data';
import { portfolioPreview } from './portfolio-preview.data';
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
  TeamDeliveryContent,
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
    en: 'Software solutions at the right scale.',
    es: 'Soluciones de software a la escala adecuada.',
  },
  lead: {
    en: 'I build, improve, and troubleshoot software—from focused fixes, features, APIs, and integrations to complete business applications and complex systems.',
    es: 'Construyo, mejoro y resuelvo problemas de software: desde correcciones puntuales, funcionalidades, APIs e integraciones hasta aplicaciones empresariales completas y sistemas complejos.',
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
      en: 'Tell me what you need to solve',
      es: 'Cuéntame qué necesitas resolver',
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

export const teamDeliveryContent = {
  label: {
    en: 'Project delivery with teams',
    es: 'Entrega de proyectos en equipo',
  },
  title: {
    en: 'Agile delivery with Scrum.',
    es: 'Entrega ágil con Scrum.',
  },
  description: {
    en: 'At project level, Scrum gives the team a shared cadence to refine and prioritize the backlog, plan sprints, coordinate delivery, review outcomes, and improve the process.',
    es: 'A nivel de proyecto, Scrum aporta al equipo una cadencia compartida para refinar y priorizar el backlog, planificar sprints, coordinar la entrega, revisar resultados y mejorar el proceso.',
  },
  tools: {
    en: 'Azure DevOps or Jira can support backlog management, sprint planning, work tracking, and shared visibility of progress and blockers.',
    es: 'Azure DevOps o Jira pueden apoyar la gestión del backlog, la planificación de sprints, el seguimiento del trabajo y la visibilidad compartida del avance y los bloqueos.',
  },
} as const satisfies TeamDeliveryContent;

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
        'Google Cloud Workflows',
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
      id: 'architecture-and-event-processing',
      label: {
        en: 'Architecture & Event Processing',
        es: 'Arquitectura y procesamiento de eventos',
      },
      items: [
        'Event-driven architecture',
        'Asynchronous workflows',
        'Webhooks',
        'State machines',
        'Idempotent processing',
      ],
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
  items: [
    ...caseStudies.map(({ id, slug, title, role, summary, period }) => ({
      kind: 'case-study' as const,
      id,
      caseStudyId: id,
      slug,
      title,
      role,
      summary,
      period,
    })),
    {
      kind: 'current-project',
      id: portfolioPreview.id,
      title: portfolioPreview.title,
      role: {
        en: 'Design & development',
        es: 'Diseño y desarrollo',
      },
      summary: {
        en: 'I created this site to present my projects and how I work, with the portfolio itself as a practical example.',
        es: 'Creé este sitio para presentar mis proyectos y mi forma de trabajar, con el propio portafolio como ejemplo práctico.',
      },
      currentLocation: {
        en: 'You are viewing this project.',
        es: 'Estás justo en este proyecto.',
      },
    },
  ],
} satisfies ProjectsContent;

export const servicesContent = {
  title: {
    en: 'Services',
    es: 'Servicios',
  },
  introduction: {
    en: 'Projects do not need to be large to benefit from experienced engineering. I can help with a focused problem, a defined phase, or a complete application—adapting the scope to what the system actually needs.',
    es: 'Los proyectos no necesitan ser grandes para beneficiarse de ingeniería experimentada. Puedo ayudar con un problema puntual, una fase definida o una aplicación completa, adaptando el alcance a lo que el sistema realmente necesita.',
  },
  items: [
    {
      id: 'custom-software-mvps',
      title: {
        en: 'Custom Software & MVPs',
        es: 'Software a medida y MVP',
      },
      description: {
        en: 'Applications, internal tools, and functional first versions designed around real workflows without overbuilding the initial scope.',
        es: 'Aplicaciones, herramientas internas y primeras versiones funcionales diseñadas alrededor de flujos reales sin sobredimensionar el alcance inicial.',
      },
    },
    {
      id: 'features-focused-improvements',
      title: {
        en: 'Features & Focused Improvements',
        es: 'Funcionalidades y mejoras puntuales',
      },
      description: {
        en: 'Screens, endpoints, workflows, validations, reports, permissions, and other targeted changes to existing applications.',
        es: 'Pantallas, endpoints, flujos, validaciones, reportes, permisos y otros cambios definidos sobre aplicaciones existentes.',
      },
    },
    {
      id: 'apis-integrations',
      title: {
        en: 'APIs & Integrations',
        es: 'APIs e integraciones',
      },
      description: {
        en: 'REST or GraphQL APIs, webhooks, authentication, synchronization, and connections to external services.',
        es: 'APIs REST o GraphQL, webhooks, autenticación, sincronización y conexiones con servicios externos.',
      },
    },
    {
      id: 'troubleshooting-performance',
      title: {
        en: 'Troubleshooting & Performance',
        es: 'Diagnóstico y rendimiento',
      },
      description: {
        en: 'Diagnosis and resolution of persistent bugs, unexpected behavior, performance issues, and difficult-to-isolate failures.',
        es: 'Diagnóstico y resolución de errores persistentes, comportamientos inesperados, problemas de rendimiento y fallos difíciles de aislar.',
      },
    },
    {
      id: 'automation-internal-tools',
      title: {
        en: 'Automation & Internal Tools',
        es: 'Automatización y herramientas internas',
      },
      description: {
        en: 'Utilities, dashboards, data-processing tools, and workflow automation for specific operational needs.',
        es: 'Utilidades, paneles, herramientas de procesamiento de datos y automatización de flujos para necesidades operativas específicas.',
      },
    },
    {
      id: 'architecture-deployment-support',
      title: {
        en: 'Architecture, Deployment & Technical Support',
        es: 'Arquitectura, despliegue y apoyo técnico',
      },
      description: {
        en: 'Architecture review, modernization, environment configuration, CI/CD, cloud deployment, and implementation support for evolving systems.',
        es: 'Revisión de arquitectura, modernización, configuración de entornos, CI/CD, despliegue cloud y apoyo de implementación para sistemas en evolución.',
      },
    },
  ],
  typicalEngagements: {
    title: {
      en: 'Typical engagements',
      es: 'Necesidades habituales',
    },
    items: [
      {
        id: 'persistent-bug',
        description: {
          en: 'Fix a persistent application or production bug.',
          es: 'Corregir un error persistente de aplicación o producción.',
        },
      },
      {
        id: 'existing-application-feature',
        description: {
          en: 'Add a feature to an existing application.',
          es: 'Añadir una funcionalidad a una aplicación existente.',
        },
      },
      {
        id: 'api-development',
        description: {
          en: 'Build or extend a REST or GraphQL API.',
          es: 'Construir o ampliar una API REST o GraphQL.',
        },
      },
      {
        id: 'service-integration',
        description: {
          en: 'Integrate a third-party service or synchronize data.',
          es: 'Integrar un servicio externo o sincronizar datos.',
        },
      },
      {
        id: 'workflow-automation',
        description: {
          en: 'Automate a repetitive workflow or create an internal tool.',
          es: 'Automatizar un flujo repetitivo o crear una herramienta interna.',
        },
      },
      {
        id: 'database-performance',
        description: {
          en: 'Improve database queries or application performance.',
          es: 'Mejorar consultas de base de datos o el rendimiento de una aplicación.',
        },
      },
      {
        id: 'application-deployment',
        description: {
          en: 'Deploy an application or configure its environment.',
          es: 'Desplegar una aplicación o configurar su entorno.',
        },
      },
      {
        id: 'mvp-system-change',
        description: {
          en: 'Build an MVP or plan a larger system change.',
          es: 'Construir un MVP o planificar un cambio mayor de sistema.',
        },
      },
    ],
  },
  contactAction: {
    label: {
      en: 'Tell me what you need to solve',
      es: 'Cuéntame qué necesitas resolver',
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
      id: 'message',
      kind: 'message',
      label: {
        en: 'Message',
        es: 'Mensaje',
      },
      displayValue: {
        en: 'Leave a message',
        es: 'Dejar un mensaje',
      },
      path: '/contact',
      accessibleName: {
        en: 'Open the contact form',
        es: 'Abrir el formulario de contacto',
      },
    },
  ],
} as const satisfies ContactContent;

export const resumeContent = {
  label: {
    en: 'Download resume',
    es: 'Descargar CV',
  },
  options: [
    {
      id: 'ats',
      label: {
        en: 'ATS',
        es: 'ATS',
      },
      accessibleName: {
        en: 'Download ATS resume',
        es: 'Descargar CV ATS',
      },
      href: {
        en: '/documents/CV/EN/Ernesto_Miro_Peraza_CV_EN_ATS.pdf',
        es: '/documents/CV/ESP/Ernesto_Miro_Peraza_CV_ES_ATS.pdf',
      },
      fileName: {
        en: 'Ernesto_Miro_Peraza_CV_EN_ATS.pdf',
        es: 'Ernesto_Miro_Peraza_CV_ES_ATS.pdf',
      },
    },
    {
      id: 'executive',
      label: {
        en: 'Executive',
        es: 'Ejecutivo',
      },
      accessibleName: {
        en: 'Download executive resume',
        es: 'Descargar CV ejecutivo',
      },
      href: {
        en: '/documents/CV/EN/Ernesto_Miro_Peraza_CV_EN_Executive.pdf',
        es: '/documents/CV/ESP/Ernesto_Miro_Peraza_CV_ES_Ejecutivo.pdf',
      },
      fileName: {
        en: 'Ernesto_Miro_Peraza_CV_EN_Executive.pdf',
        es: 'Ernesto_Miro_Peraza_CV_ES_Ejecutivo.pdf',
      },
    },
  ],
} as const satisfies ResumeContent;

export const footerContent = {
  name: 'Ernesto Miró Peraza',
  resume: resumeContent,
  copyrightOwner: 'Ernesto Miró Peraza',
} as const satisfies FooterContent;
