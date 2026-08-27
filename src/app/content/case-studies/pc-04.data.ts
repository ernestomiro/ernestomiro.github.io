import { CaseStudy } from './case-study.models';

export const pc04CaseStudy = {
  id: 'evolution-multi-tenant-edtech-cloud-platform',
  slug: 'evolution-multi-tenant-edtech-cloud-platform',
  title: {
    en: 'Evolution of a Multi-Tenant EdTech Cloud Platform',
    es: 'Evolución de una plataforma EdTech cloud multi-tenant',
  },
  role: {
    en: 'Full-Stack Engineering, Cloud Platform Evolution & Integrations',
    es: 'Ingeniería Full Stack, evolución de plataforma cloud e integraciones',
  },
  summary: {
    en: 'Long-term evolution of a multi-tenant EdTech platform spanning distributed services, role-specific web applications, identity and rostering integrations, virtual-machine operations, data workflows and cloud delivery.',
    es: 'Evolución prolongada de una plataforma EdTech multi-tenant que integraba servicios distribuidos, aplicaciones web por tipo de usuario, identidad y rostering, operaciones de máquinas virtuales, flujos de datos y entrega cloud.',
  },
  period: '2019–2025',
  context: {
    en: 'At Itopia, the platform supported education-oriented virtual application and desktop workflows through an established ecosystem of services and user experiences. Its evolution required new capabilities and integrations while preserving the continuity of existing operations across administrators, end users and support.',
    es: 'En Itopia, la plataforma sostenía flujos educativos de aplicaciones y escritorios virtuales mediante un ecosistema existente de servicios y experiencias de usuario. Su evolución requería nuevas capacidades e integraciones preservando la continuidad de las operaciones para administradores, usuarios finales y soporte.',
  },
  problem: {
    en: 'Changes crossed web applications, backend services, external identity and rostering providers, virtual machines, usage data and asynchronous events. The platform needed those parts to evolve coherently without treating every new requirement as a rewrite or concentrating operational authority in one client.',
    es: 'Los cambios atravesaban aplicaciones web, servicios backend, proveedores externos de identidad y rostering, máquinas virtuales, datos de uso y eventos asíncronos. La plataforma necesitaba que esas partes evolucionaran de forma coherente, sin tratar cada nuevo requisito como una reescritura ni concentrar la autoridad operativa en un solo cliente.',
  },
  roleAndScope: {
    en: "I contributed hands-on across the platform's evolution, building and modifying backend services, Angular portals, provider integrations, Windows agents, data workflows, security controls, infrastructure and delivery pipelines. My scope included both new capabilities and the modernization of existing components.",
    es: 'Contribuí directamente a la evolución de la plataforma, construyendo y modificando servicios backend, portales Angular, integraciones con proveedores, agentes de Windows, flujos de datos, controles de seguridad, infraestructura y pipelines de entrega. Mi alcance incluyó tanto nuevas capacidades como la modernización de componentes existentes.',
  },
  solutionAndArchitecture: {
    en: 'C#/.NET and Node.js/TypeScript services ran on managed GCP compute services, keeping business and operational responsibilities outside the browser. Angular applications provided tailored experiences for administration, end users and support through typed GraphQL contracts, PWA capabilities and a remote-desktop viewer integration. Public identity and education ecosystems connected through OAuth 2.0, SAML 2.0, directory, classroom and rostering APIs. Compute Engine orchestration and BigQuery workflows supported virtual-machine operations and usage processing. Pub/Sub, retry queues, callbacks and SSE handled asynchronous work and real-time updates. A Windows agent, envelope encryption, secret rotation, Terraform and Cloud Build extended the engineering boundary into managed machines, security, infrastructure and delivery.',
    es: 'Servicios C#/.NET y Node.js/TypeScript se ejecutaron sobre servicios de cómputo administrados de GCP, manteniendo las responsabilidades operativas y de negocio fuera del navegador. Aplicaciones Angular ofrecieron experiencias enfocadas para administración, usuarios finales y soporte mediante contratos GraphQL tipados, capacidades PWA e integración de un viewer de escritorio remoto. Ecosistemas públicos de identidad y educación se conectaron mediante OAuth 2.0, SAML 2.0 y APIs de directorio, aulas y rostering. La orquestación en Compute Engine y los flujos de BigQuery respaldaron operaciones de máquinas virtuales y procesamiento de uso. Pub/Sub, colas de retry, callbacks y SSE atendieron trabajo asíncrono y actualizaciones en tiempo real. Un agente de Windows, cifrado envelope, rotación de secretos, Terraform y Cloud Build extendieron la frontera de ingeniería hacia máquinas administradas, seguridad, infraestructura y entrega.',
  },
  technologies: [
    {
      id: 'backend-and-apis',
      label: { en: 'Backend & APIs', es: 'Backend y APIs' },
      items: ['C# / .NET', 'Node.js', 'TypeScript', 'GraphQL', 'Server-Sent Events'],
    },
    {
      id: 'frontend',
      label: { en: 'Frontend', es: 'Frontend' },
      items: ['Angular', 'Progressive Web Apps', 'Typed GraphQL', 'WebRTC'],
    },
    {
      id: 'cloud-and-data',
      label: { en: 'Cloud & data', es: 'Cloud y datos' },
      items: [
        'Google Cloud Platform',
        'Cloud Run',
        'Cloud Functions',
        'Pub/Sub',
        'BigQuery',
        'Compute Engine',
      ],
    },
    {
      id: 'identity-and-integrations',
      label: { en: 'Identity & integrations', es: 'Identidad e integraciones' },
      items: [
        'OAuth 2.0',
        'SAML 2.0',
        'Clever',
        'OneRoster',
        'Google Workspace',
        'Microsoft Graph',
      ],
    },
    {
      id: 'security-and-delivery',
      label: { en: 'Security & delivery', es: 'Seguridad y entrega' },
      items: ['Cloud KMS', 'Terraform', 'Cloud Build'],
    },
  ],
  decisions: [
    {
      id: 'incremental-evolution',
      title: {
        en: 'Evolve the platform incrementally',
        es: 'Evolucionar la plataforma de forma incremental',
      },
      description: {
        en: 'New capabilities and modernization extended the existing platform without assuming a full rewrite.',
        es: 'Las nuevas capacidades y la modernización ampliaron la plataforma existente sin asumir una reescritura completa.',
      },
    },
    {
      id: 'focused-experiences',
      title: {
        en: 'Keep authority in services and experiences focused',
        es: 'Mantener la autoridad en servicios y las experiencias enfocadas',
      },
      description: {
        en: 'Operational authority remained in services while each audience received a focused web experience.',
        es: 'La autoridad operativa permaneció en los servicios mientras cada audiencia recibió una experiencia web enfocada.',
      },
    },
    {
      id: 'integration-boundaries',
      title: {
        en: 'Isolate provider integrations',
        es: 'Aislar las integraciones con proveedores',
      },
      description: {
        en: 'External identity and rostering providers were kept behind maintainable integration boundaries.',
        es: 'Los proveedores externos de identidad y rostering se mantuvieron detrás de límites de integración mantenibles.',
      },
    },
    {
      id: 'asynchronous-processing',
      title: {
        en: 'Use asynchronous processing across systems',
        es: 'Usar procesamiento asíncrono entre sistemas',
      },
      description: {
        en: 'Workflows that crossed systems or could not complete reliably within one request used explicit asynchronous patterns.',
        es: 'Los flujos que atravesaban sistemas o no podían completarse de forma confiable en una solicitud usaron patrones asíncronos explícitos.',
      },
    },
    {
      id: 'versioned-delivery',
      title: {
        en: 'Version infrastructure and delivery',
        es: 'Versionar la infraestructura y la entrega',
      },
      description: {
        en: 'Infrastructure and delivery were versioned while secrets and sensitive data remained protected across the platform.',
        es: 'La infraestructura y la entrega se versionaron mientras secretos y datos sensibles permanecieron protegidos en la plataforma.',
      },
    },
  ],
  engineeringQuality: {
    en: "Typed API contracts, managed cloud services, infrastructure as code, repeatable delivery pipelines, encryption, secret rotation and explicit asynchronous patterns supported maintainability and safer evolution across the platform's different technical surfaces.",
    es: 'Contratos de API tipados, servicios cloud administrados, infraestructura como código, pipelines de entrega repetibles, cifrado, rotación de secretos y patrones asíncronos explícitos respaldaron la mantenibilidad y una evolución más segura entre las distintas superficies técnicas de la plataforma.',
  },
  outcome: {
    en: 'The work sustained the technical evolution of an established EdTech platform across user experiences, services, integrations, data, virtual-machine operations, security and delivery.',
    es: 'El trabajo sostuvo la evolución técnica de una plataforma EdTech existente a través de experiencias de usuario, servicios, integraciones, datos, operaciones de máquinas virtuales, seguridad y entrega.',
  },
} as const satisfies CaseStudy;
