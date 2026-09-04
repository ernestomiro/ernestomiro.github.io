import { MethodologyContent } from './methodology.models';

export const methodologyPath = '/methodology/ai-assisted-engineering' as const;
export const methodologyRoutePath = 'methodology/ai-assisted-engineering' as const;

export const methodologyContent = {
  metadata: {
    title: {
      en: 'AI-Assisted Engineering | Ernesto Miró Peraza',
      es: 'Ingeniería asistida por IA | Ernesto Miró Peraza',
    },
    description: {
      en: 'A documented engineering workflow combining persistent context, explicit guardrails, incremental implementation, verification, and human decision gates.',
      es: 'Un flujo de ingeniería documentado que combina contexto persistente, límites explícitos, implementación incremental, verificación y decisiones humanas.',
    },
  },
  teaser: {
    label: {
      en: 'Individual engineering workflow',
      es: 'Flujo individual de ingeniería',
    },
    title: {
      en: 'AI-assisted engineering with explicit guardrails.',
      es: 'Ingeniería asistida por IA con límites explícitos.',
    },
    description: {
      en: 'A documented workflow that keeps context, architecture, verification, and human decisions visible from one change to the next.',
      es: 'Un flujo documentado que mantiene visibles el contexto, la arquitectura, la verificación y las decisiones humanas de un cambio al siguiente.',
    },
    actionLabel: {
      en: 'See my individual workflow',
      es: 'Conocer mi flujo individual',
    },
    path: methodologyPath,
  },
  hero: {
    backLabel: {
      en: 'Back to expertise',
      es: 'Volver a especialización',
    },
    label: {
      en: 'Individual engineering workflow',
      es: 'Flujo individual de ingeniería',
    },
    headline: {
      en: 'AI assistance, grounded in engineering context.',
      es: 'Asistencia con IA, sustentada en contexto de ingeniería.',
    },
    lead: {
      en: 'I use AI as part of a documented workflow for planning, implementation, and review—keeping architecture, evidence, and high-impact decisions explicit from one change to the next.',
      es: 'Uso la IA como parte de un flujo documentado para planificar, implementar y revisar, manteniendo explícitas la arquitectura, la evidencia y las decisiones de alto impacto de un cambio al siguiente.',
    },
  },
  workflow: {
    title: {
      en: 'A repeatable workflow',
      es: 'Un flujo repetible',
    },
    introduction: {
      en: 'Each change moves through a consistent individual workflow. The details adapt to the project, while context, boundaries, evidence, and continuity remain explicit.',
      es: 'Cada cambio avanza mediante un flujo individual consistente. Los detalles se adaptan al proyecto, mientras el contexto, los límites, la evidencia y la continuidad permanecen explícitos.',
    },
    stages: [
      {
        id: 'context',
        title: {
          en: 'Context',
          es: 'Contexto',
        },
        description: {
          en: 'Start from documented decisions, system boundaries, and the current delivery state.',
          es: 'Partir de decisiones documentadas, límites del sistema y el estado actual de la entrega.',
        },
      },
      {
        id: 'plan',
        title: {
          en: 'Plan',
          es: 'Plan',
        },
        description: {
          en: 'Turn objectives into small, verifiable tasks with dependencies and completion criteria.',
          es: 'Convertir objetivos en tareas pequeñas y verificables, con dependencias y criterios de cierre.',
        },
      },
      {
        id: 'guardrails',
        title: {
          en: 'Guardrails',
          es: 'Reglas y límites',
        },
        description: {
          en: 'Apply project-specific constraints for architecture, content, privacy, interface, and deployment.',
          es: 'Aplicar restricciones específicas de arquitectura, contenido, privacidad, interfaz y despliegue.',
        },
      },
      {
        id: 'implement',
        title: {
          en: 'Implement',
          es: 'Implementación',
        },
        description: {
          en: 'Produce focused changes that preserve ownership and avoid unrelated refactors.',
          es: 'Producir cambios enfocados que preserven responsabilidades y eviten refactors no relacionados.',
        },
      },
      {
        id: 'verify',
        title: {
          en: 'Verify',
          es: 'Verificación',
        },
        description: {
          en: 'Match evidence to risk and state clearly what was checked and what remains pending.',
          es: 'Ajustar la evidencia al riesgo y declarar con precisión qué se comprobó y qué permanece pendiente.',
        },
      },
      {
        id: 'handoff',
        title: {
          en: 'Handoff',
          es: 'Continuidad',
        },
        description: {
          en: 'Update decisions and operating context so the next session or collaborator can continue without reconstructing the work.',
          es: 'Actualizar decisiones y contexto operativo para que la siguiente sesión o colaborador pueda continuar sin reconstruir el trabajo.',
        },
      },
    ],
  },
  humanGate: {
    title: {
      en: 'Human decisions stay visible.',
      es: 'Las decisiones humanas permanecen visibles.',
    },
    body: {
      en: 'AI can analyze context, propose changes, and execute defined work. Product direction, personal claims, high-impact tradeoffs, and publication decisions remain explicit human checkpoints. Verification can also send work back to planning or implementation instead of forcing a linear path.',
      es: 'La IA puede analizar contexto, proponer cambios y ejecutar trabajo definido. La dirección del producto, las afirmaciones personales, los tradeoffs de alto impacto y las decisiones de publicación permanecen como puntos explícitos de revisión humana. La verificación también puede devolver el trabajo al plan o a la implementación en vez de forzar un camino lineal.',
    },
  },
  evidence: {
    title: {
      en: 'What the system is designed to preserve',
      es: 'Lo que el sistema busca preservar',
    },
    items: [
      {
        id: 'continuity',
        title: {
          en: 'Continuity',
          es: 'Continuidad',
        },
        description: {
          en: 'Persistent documentation carries decisions and the current handoff across sessions.',
          es: 'La documentación persistente conserva decisiones y el handoff actual entre sesiones.',
        },
      },
      {
        id: 'project-specific-boundaries',
        title: {
          en: 'Project-specific boundaries',
          es: 'Límites específicos del proyecto',
        },
        description: {
          en: 'Architecture, interface, privacy, and deployment constraints shape what can change.',
          es: 'Las restricciones de arquitectura, interfaz, privacidad y despliegue determinan qué puede cambiar.',
        },
      },
      {
        id: 'traceable-scope',
        title: {
          en: 'Traceable scope',
          es: 'Alcance trazable',
        },
        description: {
          en: 'Atomic tasks, dependencies, states, and completion criteria keep the work inspectable.',
          es: 'Las tareas atómicas, dependencias, estados y criterios de cierre mantienen el trabajo inspeccionable.',
        },
      },
      {
        id: 'honest-verification',
        title: {
          en: 'Honest verification',
          es: 'Verificación honesta',
        },
        description: {
          en: 'Source inspection, builds, automated tests, runtime, and publication are reported as distinct kinds of evidence.',
          es: 'La inspección de fuente, compilación, pruebas automatizadas, runtime y publicación se reportan como evidencias distintas.',
        },
      },
    ],
  },
  closing: {
    title: {
      en: 'The individual workflow adapts to the project.',
      es: 'El flujo individual se adapta al proyecto.',
    },
    body: {
      en: 'This individual engineering workflow complements the team’s delivery methodology. It can support a multi-repository business application or a static bilingual portfolio, while guardrails and verification change with the architecture and risk.',
      es: 'Este flujo individual de ingeniería complementa la metodología de entrega del equipo. Puede apoyar una aplicación empresarial distribuida en varios repositorios o un portafolio estático y bilingüe, mientras los límites y la verificación cambian con la arquitectura y el riesgo.',
    },
    primaryAction: {
      label: {
        en: 'Explore product case studies',
        es: 'Explorar casos de producto',
      },
      fragment: 'projects',
    },
    secondaryAction: {
      label: {
        en: 'Discuss a project',
        es: 'Conversar sobre un proyecto',
      },
      fragment: 'contact',
    },
  },
} as const satisfies MethodologyContent;
