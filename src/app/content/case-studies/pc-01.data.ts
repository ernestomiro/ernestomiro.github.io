import { CaseStudy } from './case-study.models';

export const pc01CaseStudy = {
  id: 'enterprise-crm-automotive-operations',
  slug: 'enterprise-crm-automotive-operations',
  title: {
    en: 'Enterprise CRM for multi-branch automotive operations',
    es: 'CRM empresarial para operaciones automotrices multisucursal',
  },
  summary: {
    en: 'I led the evolution of an existing CRM into an integrated platform for complex, multi-company and multi-branch operations. The work connected customer, service, scheduling, procurement, records, permissions and notification workflows across an Angular frontend and a .NET backend, with transactional rules protecting cross-module state changes.',
    es: 'Lideré la evolución de un CRM existente hasta convertirlo en una plataforma integrada para operaciones complejas, multiempresa y multisucursal. El trabajo conectó clientes, servicios, agenda, abastecimiento, expedientes, permisos y notificaciones mediante un frontend Angular y un backend .NET, con reglas transaccionales que protegen los cambios de estado entre módulos.',
  },
  period: '2026',
  context: {
    en: 'An existing CRM had core areas at different levels of completion. The goal was to turn that investment into a coherent operational platform, extending the current codebase instead of starting over.',
    es: 'Un CRM existente tenía áreas principales en distintos niveles de avance. El objetivo fue convertir esa inversión en una plataforma operativa coherente, ampliando la base de código en lugar de comenzar nuevamente desde cero.',
  },
  problem: {
    en: 'Daily work crossed customers, services, appointments, procurement, transfers, records and financial states. Changes also depended on company, branch, permissions, civil time and concurrent activity. Treating each module in isolation could leave the system in contradictory or partially updated states.',
    es: 'La operación diaria conectaba clientes, servicios, citas, abastecimiento, traspasos, expedientes y estados financieros. Los cambios también dependían de empresa, sucursal, permisos, tiempo civil y actividad concurrente. Tratar cada módulo de forma aislada podía dejar estados contradictorios o actualizaciones parciales.',
  },
  roleAndScope: {
    en: 'I led full-stack delivery and technical direction across the Angular frontend, .NET backend, data model and infrastructure preparation. I also coordinated a three-person team and translated client conversations into incremental technical decisions.',
    es: 'Lideré la entrega Full Stack y la dirección técnica del frontend Angular, el backend .NET, el modelo de datos y la preparación de infraestructura. También coordiné un equipo de tres personas y convertí las conversaciones con el cliente en decisiones técnicas incrementales.',
  },
  solutionAndArchitecture: {
    en: 'The solution combined a standalone Angular application with a layered ASP.NET Core API and SQL Server persistence. Business capabilities were calculated by the backend and shared with the UI, while critical operations revalidated their impact and updated related records transactionally. Branch-aware permissions, civil-time handling and real-time notifications supported the operational model without placing business authority in the browser.',
    es: 'La solución combinó una aplicación Angular standalone con una API ASP.NET Core en capas y persistencia en SQL Server. Las capacidades de negocio se calcularon en el backend y se compartieron con la interfaz, mientras que las operaciones críticas revalidaron su impacto y actualizaron las relaciones de manera transaccional. Los permisos por sucursal, el manejo del tiempo civil y las notificaciones en tiempo real sostuvieron el modelo operativo sin trasladar la autoridad de negocio al navegador.',
  },
  diagrams: [
    {
      id: 'conceptual-architecture',
      title: {
        en: 'Conceptual architecture',
        es: 'Arquitectura conceptual',
      },
      accessibleName: {
        en: 'Conceptual architecture connecting an Angular application, an ASP.NET Core API, application policies and SQL Server persistence, with branch-aware permissions and SSE notifications.',
        es: 'Arquitectura conceptual que conecta una aplicación Angular, una API ASP.NET Core, políticas de aplicación y persistencia SQL Server, con permisos por sucursal y notificaciones SSE.',
      },
      paths: [
        {
          id: 'application-layers',
          nodes: [
            {
              en: 'Angular web application',
              es: 'Aplicación web Angular',
            },
            {
              en: 'ASP.NET Core API',
              es: 'API ASP.NET Core',
            },
            {
              en: 'Application services & domain policies',
              es: 'Servicios de aplicación y políticas de dominio',
            },
            {
              en: 'EF Core persistence',
              es: 'Persistencia EF Core',
            },
            {
              en: 'SQL Server',
              es: 'SQL Server',
            },
          ],
        },
      ],
      annotations: [
        {
          en: 'Company, branch & permission context',
          es: 'Contexto de empresa, sucursal y permisos',
        },
        {
          en: 'SSE notifications from API to application',
          es: 'Notificaciones SSE desde la API a la aplicación',
        },
      ],
    },
    {
      id: 'connected-operational-flow',
      title: {
        en: 'Connected operational flow',
        es: 'Flujo operativo conectado',
      },
      accessibleName: {
        en: 'Narrative map connecting customer context, service workflow, scheduling, procurement, records and financial closure, with permissions, audit and notifications across the flow.',
        es: 'Mapa narrativo que conecta contexto del cliente, flujo de servicio, agenda, abastecimiento, expedientes y cierre financiero, con permisos, auditoría y notificaciones a lo largo del flujo.',
      },
      paths: [
        {
          id: 'customer-to-scheduling',
          nodes: [
            {
              en: 'Customer context',
              es: 'Contexto del cliente',
            },
            {
              en: 'Service workflow',
              es: 'Flujo de servicio',
            },
            {
              en: 'Scheduling',
              es: 'Agenda',
            },
          ],
        },
        {
          id: 'service-to-closure',
          nodes: [
            {
              en: 'Service workflow',
              es: 'Flujo de servicio',
            },
            {
              en: 'Procurement',
              es: 'Abastecimiento',
            },
            {
              en: 'Records',
              es: 'Expedientes',
            },
            {
              en: 'Financial closure',
              es: 'Cierre financiero',
            },
          ],
        },
      ],
      annotations: [
        {
          en: 'Permissions · audit · notifications',
          es: 'Permisos · auditoría · notificaciones',
        },
      ],
    },
  ],
  technologies: [
    {
      id: 'representative-stack',
      label: {
        en: 'Representative stack',
        es: 'Stack representativo',
      },
      items: [
        'Angular 21',
        'TypeScript 5.9',
        'Angular Material',
        'RxJS',
        'Signals',
        'Reactive Forms',
        '.NET 9',
        'ASP.NET Core Web API',
        'Entity Framework Core 9',
        'Microsoft SQL Server',
        'JWT',
        'Server-Sent Events',
      ],
    },
  ],
  engineeringQuality: {
    en: 'The project used repeatable build and test gates across backend and frontend, including SQL integration tests and a cross-module workflow smoke test. Structured errors, audit records, correlation and secret-safe logging made failures easier to diagnose without exposing sensitive payloads.',
    es: 'El proyecto usó gates repetibles de compilación y pruebas para backend y frontend, incluidas integraciones con SQL y un smoke test del recorrido entre módulos. Los errores estructurados, la auditoría, la correlación y los logs sin datos sensibles facilitaron el diagnóstico sin exponer payloads privados.',
  },
  outcome: {
    en: 'The resulting core connected administration, customer and service management, scheduling, procurement, records, permissions, audit and notifications in one coherent workflow.',
    es: 'El núcleo resultante conectó administración, clientes, servicios, agenda, abastecimiento, expedientes, permisos, auditoría y notificaciones en un flujo coherente.',
  },
} as const satisfies CaseStudy;
