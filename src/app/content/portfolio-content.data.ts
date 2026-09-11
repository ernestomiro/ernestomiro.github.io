import { aiTechnologyGroups } from './ai-technologies.data';
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
    label: { en: 'Capabilities +AI', es: 'Capacidades +IA' },
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
    en: 'Software that simplifies work and adapts to your business.',
    es: 'Software que simplifica el trabajo y se adapta a tu negocio.',
  },
  lead: {
    en: 'I help you fix bugs, reduce manual work, and connect your systems. I build new applications and improve the ones you already use, from a focused need to the evolution of a complete product.',
    es: 'Te ayudo a resolver fallos, reducir tareas manuales y conectar tus sistemas. Desarrollo nuevas aplicaciones y mejoro las que ya utilizas, desde una necesidad puntual hasta la evolución de un producto completo.',
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
      en: 'I’m a full-stack software developer specializing in business applications. My experience combines implementation, needs analysis, and technical team coordination. I connect business decisions with work across interfaces, services, and data to turn requirements into concrete features and keep systems ready for future changes.',
      es: 'Soy desarrollador de software Full Stack especializado en aplicaciones empresariales. Mi experiencia combina implementación, análisis de necesidades y coordinación técnica de equipos. Conecto las decisiones de negocio con el trabajo en interfaces, servicios y datos para convertir requisitos en funcionalidades concretas y mantener los sistemas preparados para nuevos cambios.',
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
        en: 'Translate complex business processes into features that keep information, permissions, and work across departments consistent.',
        es: 'Traducir procesos de negocio complejos en funcionalidades que mantengan coherentes la información, los permisos y el trabajo entre áreas.',
      },
    },
    {
      id: 'software-evolution',
      title: {
        en: 'Software Evolution',
        es: 'Evolución de software',
      },
      description: {
        en: 'Add new capabilities by building on the existing foundation while keeping the system maintainable and ready to expand.',
        es: 'Incorporar nuevas capacidades aprovechando la base existente y cuidando que el sistema pueda seguir manteniéndose y ampliándose.',
      },
    },
    {
      id: 'integrations-and-apis',
      title: {
        en: 'Integrations & APIs',
        es: 'Integraciones y APIs',
      },
      description: {
        en: 'Define how systems share information and respond to failures so their connections can be maintained and evolve.',
        es: 'Definir cómo comparten información los sistemas y cómo responden ante fallos, para que sus conexiones puedan mantenerse y evolucionar.',
      },
    },
    {
      id: 'end-to-end-development',
      title: {
        en: 'End-to-End Development',
        es: 'Desarrollo integral',
      },
      description: {
        en: 'Deliver a feature from end to end, connecting the interface, business logic, and data so the different parts work together consistently.',
        es: 'Resolver una funcionalidad de principio a fin, conectando interfaz, lógica de negocio y datos para que las distintas partes funcionen de forma coherente.',
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
    en: 'Clear priorities and visible progress with Scrum.',
    es: 'Prioridades claras y avance visible con Scrum.',
  },
  description: {
    en: 'Sprint planning helps the team share priorities, review progress, and adjust the work with each delivery. Results and blockers become visible to support decisions throughout the project.',
    es: 'La planificación por sprints ayuda a que el equipo comparta prioridades, revise avances y ajuste el trabajo con cada entrega. Los resultados y los bloqueos se hacen visibles para tomar decisiones durante el proyecto.',
  },
  tools: {
    en: 'Azure DevOps or Jira make it possible to see what is pending, what is in progress, and where intervention is needed.',
    es: 'Azure DevOps o Jira permiten consultar qué está pendiente, qué está en curso y dónde hace falta intervenir.',
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
    ...aiTechnologyGroups,
    {
      id: 'development-tools',
      label: { en: 'Development Tools', es: 'Herramientas de desarrollo' },
      items: ['Visual Studio Code', 'Codex', 'Claude Code'],
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
        en: 'I designed and developed this site so clients and employers can understand the problems I can address, review my experience, and contact me. The portfolio itself is a practical example of my work.',
        es: 'Diseñé y desarrollé este sitio para que clientes y empleadores puedan conocer qué problemas puedo abordar, revisar mi experiencia y contactarme. El propio portafolio es una muestra práctica de mi trabajo.',
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
    en: 'You can count on me to solve a focused problem, complete a project phase, or develop an application. The scope adapts to what you need to achieve and what you have already built.',
    es: 'Puedes contar conmigo para resolver un problema puntual, completar una etapa o desarrollar una aplicación. El alcance se adapta a lo que necesitas conseguir y a lo que ya tienes construido.',
  },
  items: [
    {
      id: 'custom-software-mvps',
      title: {
        en: 'Custom Software & MVPs',
        es: 'Software a medida y MVP',
      },
      description: {
        en: 'Turn an idea or operational need into a usable application. I build an initial version focused on the essentials so you can try it out and decide how to grow it.',
        es: 'Convierte una idea o necesidad operativa en una aplicación utilizable. Desarrollo una primera versión centrada en lo esencial para que puedas ponerla a prueba y decidir cómo hacerla crecer.',
      },
    },
    {
      id: 'features-focused-improvements',
      title: {
        en: 'Features & Focused Improvements',
        es: 'Funcionalidades y mejoras puntuales',
      },
      description: {
        en: 'Adapt your application to new needs with focused features: reports to access information, permissions to organize responsibilities, and improvements to the workflows your team already uses.',
        es: 'Adapta tu aplicación a nuevas necesidades con funcionalidades concretas: reportes para consultar información, permisos para organizar responsabilidades y mejoras en los flujos de trabajo que ya utiliza tu equipo.',
      },
    },
    {
      id: 'apis-integrations',
      title: {
        en: 'APIs & Integrations',
        es: 'APIs e integraciones',
      },
      description: {
        en: 'Connect your applications to share information and reduce manual data entry. I develop APIs and integrations with external services around your operational needs.',
        es: 'Conecta tus aplicaciones para compartir información y reducir la captura manual de datos. Desarrollo APIs e integraciones con servicios externos según las necesidades de tu operación.',
      },
    },
    {
      id: 'troubleshooting-performance',
      title: {
        en: 'Troubleshooting & Performance',
        es: 'Diagnóstico y rendimiento',
      },
      description: {
        en: 'Get work moving again when your application slows tasks down or interrupts them. I investigate and fix persistent bugs and performance issues, addressing their causes and their impact on everyday use.',
        es: 'Recupera fluidez en las tareas que tu aplicación vuelve lentas o interrumpe. Investigo y corrijo errores persistentes y problemas de rendimiento, atendiendo su causa y su impacto en el uso diario.',
      },
    },
    {
      id: 'automation-internal-tools',
      title: {
        en: 'Automation & Internal Tools',
        es: 'Automatización y herramientas internas',
      },
      description: {
        en: 'Reduce your team’s repetitive work with automation and internal tools to process data, access information, and coordinate everyday tasks.',
        es: 'Reduce el trabajo repetitivo de tu equipo con automatizaciones y herramientas internas para procesar datos, consultar información y coordinar tareas cotidianas.',
      },
    },
    {
      id: 'architecture-deployment-support',
      title: {
        en: 'Architecture, Deployment & Technical Support',
        es: 'Arquitectura, despliegue y apoyo técnico',
      },
      description: {
        en: 'Prepare your application for release, maintenance, and continued evolution. I review its architecture, modernize components, and configure environments and deployment processes around the project’s needs.',
        es: 'Prepara tu aplicación para publicarse, mantenerse y seguir evolucionando. Reviso su arquitectura, modernizo componentes y configuro entornos y procesos de despliegue según las necesidades del proyecto.',
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
          en: 'A recurring bug is interrupting our work.',
          es: 'Hay un error que se repite y está interrumpiendo nuestro trabajo.',
        },
      },
      {
        id: 'existing-application-feature',
        description: {
          en: 'Our application works, but we need to add a feature.',
          es: 'Nuestra aplicación funciona, pero necesitamos añadir una funcionalidad.',
        },
      },
      {
        id: 'api-development',
        description: {
          en: 'We need an API so other applications can use our data or features.',
          es: 'Necesitamos una API para que otras aplicaciones puedan utilizar nuestros datos o funciones.',
        },
      },
      {
        id: 'service-integration',
        description: {
          en: 'Our systems need to share information and stay in sync.',
          es: 'Nuestros sistemas necesitan compartir información y mantenerse sincronizados.',
        },
      },
      {
        id: 'workflow-automation',
        description: {
          en: 'We keep repeating a manual task and want to automate it.',
          es: 'Repetimos una tarea manual y queremos automatizarla.',
        },
      },
      {
        id: 'database-performance',
        description: {
          en: 'Accessing information or completing a task in the application takes too long.',
          es: 'Consultar información o completar una tarea en la aplicación tarda demasiado.',
        },
      },
      {
        id: 'application-deployment',
        description: {
          en: 'We have an application and need to prepare it for use.',
          es: 'Tenemos una aplicación y necesitamos prepararla para ponerla en funcionamiento.',
        },
      },
      {
        id: 'mvp-system-change',
        description: {
          en: 'We want to try out an idea with an initial version or plan a major system improvement.',
          es: 'Queremos probar una idea con una primera versión o planificar una mejora importante del sistema.',
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
