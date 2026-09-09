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
      en: 'How I work with AI to produce reviewable changes, preserve decisions, and communicate what is verified and what remains pending.',
      es: 'Cómo trabajo con IA para producir cambios revisables, conservar decisiones y comunicar qué está verificado y qué queda pendiente.',
    },
  },
  teaser: {
    label: {
      en: 'Individual engineering workflow',
      es: 'Flujo individual de ingeniería',
    },
    title: {
      en: 'AI with human review and verifiable changes.',
      es: 'IA con revisión humana y cambios verificables.',
    },
    description: {
      en: 'I use AI within a documented process so each change can be reviewed, decisions are preserved, and work can continue with context.',
      es: 'Uso la IA dentro de un proceso documentado para que cada cambio pueda revisarse, las decisiones se conserven y el trabajo pueda continuar con contexto.',
    },
    actionLabel: {
      en: 'See how I work with AI',
      es: 'Conocer cómo trabajo con IA',
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
      en: 'Reviewable changes and continuity with AI support.',
      es: 'Cambios revisables y continuidad del trabajo con apoyo de IA.',
    },
    lead: {
      en: 'I use AI to support planning, implementation, and review. I document decisions, define the scope of each change, and explain what was verified and what remains pending so the work can be evaluated and resumed with clarity.',
      es: 'Uso la IA para apoyar la planificación, la implementación y la revisión. Documento las decisiones, delimito cada cambio y explico qué se verificó y qué queda pendiente, para que el trabajo pueda evaluarse y retomarse con claridad.',
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
      en: 'Important decisions require human review.',
      es: 'Las decisiones importantes requieren revisión humana.',
    },
    body: {
      en: 'AI helps with analysis, proposals, and implementation. Product decisions, high-impact changes, and publication go through human review. If verification finds a problem, the work is reviewed again before proceeding.',
      es: 'La IA ayuda a analizar, proponer e implementar. Las decisiones sobre el producto, los cambios de mayor impacto y la publicación pasan por revisión humana. Si la verificación encuentra un problema, el trabajo vuelve a revisarse antes de continuar.',
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
          en: 'Decisions and the current state of work are documented so another person or a later session can continue with context.',
          es: 'Las decisiones y el estado del trabajo quedan documentados para que otra persona o una sesión posterior puedan continuar con contexto.',
        },
      },
      {
        id: 'project-specific-boundaries',
        title: {
          en: 'Project-specific boundaries',
          es: 'Límites específicos del proyecto',
        },
        description: {
          en: 'Each change respects the conditions agreed for the project, including architecture, interface, privacy, and publication.',
          es: 'Cada cambio respeta las condiciones acordadas para el proyecto, incluidos arquitectura, interfaz, privacidad y publicación.',
        },
      },
      {
        id: 'traceable-scope',
        title: {
          en: 'Traceable scope',
          es: 'Alcance trazable',
        },
        description: {
          en: 'You can see what is being worked on, what it depends on, and what remains before it can be considered complete.',
          es: 'Se puede consultar qué se está haciendo, de qué depende y qué falta para darlo por terminado.',
        },
      },
      {
        id: 'honest-verification',
        title: {
          en: 'Honest verification',
          es: 'Verificación honesta',
        },
        description: {
          en: 'The delivery’s actual status is made clear by explaining what was checked, how it was checked, and what remains pending.',
          es: 'Se explica qué se comprobó, cómo se comprobó y qué sigue pendiente, para evaluar el estado real de la entrega.',
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
