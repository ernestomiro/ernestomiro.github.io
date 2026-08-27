import { CaseStudy } from './case-study.models';

export const pc02CaseStudy = {
  id: 'distributed-saas-platform-education-operations',
  slug: 'distributed-saas-platform-education-operations',
  title: {
    en: 'Distributed SaaS Platform for Education Operations',
    es: 'Plataforma SaaS distribuida para operaciones educativas',
  },
  role: {
    en: 'Full-Stack Engineering, Distributed Architecture & Technical Leadership',
    es: 'Ingeniería Full Stack, arquitectura distribuida y liderazgo técnico',
  },
  summary: {
    en: 'Design and implementation of a new generation of multi-tenant SaaS capabilities, combining a single-entry gateway, distributed services, tenant-aware authorization and cross-cloud orchestration.',
    es: 'Diseño e implementación de una nueva generación de capacidades SaaS multi-tenant, combinando un gateway de entrada único, servicios distribuidos, autorización consciente del tenant y orquestación entre clouds.',
  },
  period: '2025–2026',
  context: {
    en: 'At Itopia, the platform needed a technical foundation capable of coordinating independent business capabilities for school districts while preserving tenant boundaries, consistent security rules and a single point of entry for clients.',
    es: 'En Itopia, la plataforma necesitaba una base técnica capaz de coordinar capacidades de negocio independientes para distritos escolares, preservando los límites entre tenants, reglas de seguridad consistentes y un único punto de entrada para los clientes.',
  },
  problem: {
    en: 'The architecture had to coordinate synchronous APIs with onboarding, consent, capacity management and other long-running operations spanning GCP and Azure. Those workflows could not depend on a single request remaining open and needed controlled retries, callbacks and protection against duplicate execution.',
    es: 'La arquitectura debía coordinar APIs síncronas con onboarding, consentimiento, gestión de capacidad y otras operaciones de larga duración distribuidas entre GCP y Azure. Esos flujos no podían depender de mantener abierta una única solicitud y necesitaban reintentos controlados, callbacks y protección contra ejecuciones duplicadas.',
  },
  roleAndScope: {
    en: 'I shaped the distributed architecture, defined gateway and service conventions, and contributed hands-on across backend, cloud orchestration, infrastructure and technical delivery. I also provided implementation guidance and review across a small frontend, backend and QA team.',
    es: 'Definí la arquitectura distribuida, las convenciones del gateway y los servicios, y contribuí directamente en backend, orquestación cloud, infraestructura y entrega técnica. También aporté guía de implementación y revisión para un equipo pequeño de frontend, backend y QA.',
  },
  solutionAndArchitecture: {
    en: 'A single-entry gateway established a consistent external boundary while distributed services retained focused responsibilities. REST and gRPC supported different communication needs, with OIDC service-to-service authentication, scoped authorization and rate limiting. Explicit state machines coordinated multi-step tenant onboarding, Entra ID consent, callbacks, event fan-out and scheduled retries. Long-running operations used polling, feature flags, cleanup controls and multi-layer idempotency, while Azure Virtual Desktop orchestration used ARM-based automation and controlled capacity patterns. Terraform and Cloud Build kept infrastructure and delivery reproducible.',
    es: 'Un gateway de entrada único estableció un límite externo consistente mientras los servicios distribuidos conservaron responsabilidades enfocadas. REST y gRPC cubrieron distintas necesidades de comunicación, con autenticación OIDC entre servicios, autorización por scopes y rate limiting. State machines explícitas coordinaron el onboarding multi-tenant, el consentimiento de Entra ID, callbacks, fan-out de eventos y reintentos programados. Las operaciones de larga duración usaron polling, feature flags, controles de limpieza e idempotencia en múltiples capas, mientras la orquestación de Azure Virtual Desktop utilizó automatización con ARM y patrones controlados de capacidad. Terraform y Cloud Build mantuvieron reproducibles la infraestructura y la entrega.',
  },
  technologies: [
    {
      id: 'backend-and-apis',
      label: { en: 'Backend & APIs', es: 'Backend y APIs' },
      items: ['.NET', 'ASP.NET Core', 'REST', 'gRPC'],
    },
    {
      id: 'identity-and-security',
      label: { en: 'Identity & security', es: 'Identidad y seguridad' },
      items: ['OAuth 2.0', 'OpenID Connect', 'Microsoft Entra ID', 'Scoped authorization'],
    },
    {
      id: 'cloud',
      label: { en: 'Cloud', es: 'Cloud' },
      items: [
        'Google Cloud Platform',
        'Microsoft Azure',
        'Azure Virtual Desktop',
        'Azure Resource Manager',
        'Cloud Scheduler',
      ],
    },
    {
      id: 'delivery',
      label: { en: 'Delivery', es: 'Entrega' },
      items: ['Terraform', 'Cloud Build'],
    },
  ],
  decisions: [
    {
      id: 'external-boundary',
      title: {
        en: 'Separate external entry from service ownership',
        es: 'Separar la entrada externa de la propiedad de los servicios',
      },
      description: {
        en: 'The external entry boundary remained independent from the focused responsibilities owned by internal services.',
        es: 'El límite de entrada externo permaneció independiente de las responsabilidades enfocadas de los servicios internos.',
      },
    },
    {
      id: 'explicit-tenant-context',
      title: { en: 'Make tenant context explicit', es: 'Hacer explícito el contexto del tenant' },
      description: {
        en: 'Tenant and authorization context traveled explicitly across every service boundary.',
        es: 'El tenant y el contexto de autorización se transmitieron explícitamente en cada límite de servicio.',
      },
    },
    {
      id: 'durable-state-transitions',
      title: {
        en: 'Model long-running work as durable transitions',
        es: 'Modelar el trabajo prolongado como transiciones durables',
      },
      description: {
        en: 'Long-running operations used explicit state transitions instead of extended synchronous requests.',
        es: 'Las operaciones de larga duración usaron transiciones de estado explícitas en lugar de solicitudes síncronas extendidas.',
      },
    },
    {
      id: 'idempotent-retries',
      title: { en: 'Design for retries and callbacks', es: 'Diseñar para reintentos y callbacks' },
      description: {
        en: 'Retries and callbacks were treated as expected behavior, with idempotency designed at multiple layers.',
        es: 'Los reintentos y callbacks se trataron como comportamiento esperado, con idempotencia diseñada en múltiples capas.',
      },
    },
    {
      id: 'versioned-infrastructure',
      title: {
        en: 'Version infrastructure and delivery rules',
        es: 'Versionar la infraestructura y las reglas de entrega',
      },
      description: {
        en: 'Cloud infrastructure and delivery rules were expressed as versioned configuration.',
        es: 'La infraestructura cloud y las reglas de entrega se expresaron como configuración versionada.',
      },
    },
  ],
  engineeringQuality: {
    en: 'Shared conventions covered structured logging, dependency injection, secret management, validation and code review. Security-sensitive flows were reviewed around token validation, tenant context and protected data without exposing private findings.',
    es: 'Las convenciones compartidas cubrieron logging estructurado, dependency injection, gestión de secretos, validación y revisión de código. Los flujos sensibles de seguridad se revisaron alrededor de la validación de tokens, el contexto del tenant y los datos protegidos, sin exponer hallazgos privados.',
  },
  outcome: {
    en: 'The work established a consistent architectural and engineering foundation for a new platform generation, with explicit service boundaries, reusable security patterns and controlled asynchronous workflows.',
    es: 'El trabajo estableció una base arquitectónica y de ingeniería consistente para una nueva generación de la plataforma, con límites de servicio explícitos, patrones reutilizables de seguridad y flujos asíncronos controlados.',
  },
} as const satisfies CaseStudy;
