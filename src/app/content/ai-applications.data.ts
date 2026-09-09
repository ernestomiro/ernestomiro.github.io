import { aiTechnologyGroups } from './ai-technologies.data';
import { pc11CaseStudy } from './case-studies/pc-11.data';
import { AiCapabilityCard, Capability, LocalizedText, TechnologyGroup } from './portfolio-content.models';

export const aiApplicationsRoutePath = 'capabilities/ai-in-applications';
export const aiApplicationsPath = '/capabilities/ai-in-applications' as const;

interface AiApplicationsContent {
  readonly metadata: { readonly title: LocalizedText; readonly description: LocalizedText };
  readonly teaser: Omit<AiCapabilityCard, 'id'>;
  readonly hero: {
    readonly backLabel: LocalizedText;
    readonly label: LocalizedText;
    readonly headline: LocalizedText;
    readonly lead: LocalizedText;
  };
  readonly applications: {
    readonly title: LocalizedText;
    readonly introduction: LocalizedText;
    readonly items: readonly Capability[];
  };
  readonly integration: {
    readonly title: LocalizedText;
    readonly introduction: LocalizedText;
    readonly items: readonly Capability[];
  };
  readonly technologies: {
    readonly title: LocalizedText;
    readonly introduction: LocalizedText;
    readonly groups: readonly TechnologyGroup[];
  };
  readonly example: {
    readonly title: LocalizedText;
    readonly body: LocalizedText;
    readonly actionLabel: LocalizedText;
    readonly path: `/${string}`;
    readonly contactLabel: LocalizedText;
  };
}

export const aiApplicationsContent = {
  metadata: {
    title: {
      en: 'AI in Applications | Ernesto Miró Peraza',
      es: 'IA en aplicaciones | Ernesto Miró Peraza',
    },
    description: {
      en: 'AI integration capabilities for applications: language models, RAG, tool calling, and agentic workflows connected to business information and functions.',
      es: 'Capacidades de integración de IA en aplicaciones: modelos de lenguaje, RAG, llamada a herramientas y flujos con agentes conectados a la información y las funciones del negocio.',
    },
  },
  teaser: {
    label: { en: 'AI in applications', es: 'IA en aplicaciones' },
    title: {
      en: 'AI agents to find information and coordinate tasks.',
      es: 'Agentes de IA para consultar información y coordinar tareas.',
    },
    description: {
      en: 'I integrate language models, RAG, and application tools to help users find information, work with text, and coordinate tasks through agents and workflows.',
      es: 'Integro modelos de lenguaje, RAG y herramientas de la aplicación para ayudar a los usuarios a encontrar información, trabajar con texto y coordinar tareas mediante agentes y flujos de trabajo.',
    },
    actionLabel: { en: 'Explore AI capabilities', es: 'Conocer las capacidades de IA' },
    path: aiApplicationsPath,
  },
  hero: {
    backLabel: { en: 'Back to AI capabilities', es: 'Volver a capacidades de IA' },
    label: { en: 'AI in applications', es: 'IA en aplicaciones' },
    headline: {
      en: 'AI connected to your information and workflows.',
      es: 'IA conectada a tu información y tus procesos.',
    },
    lead: {
      en: 'I can incorporate AI capabilities into new or existing applications so users can query information, process text, and complete tasks with the support of agents and connected tools.',
      es: 'Puedo incorporar capacidades de IA a aplicaciones nuevas o existentes para que los usuarios consulten información, procesen texto y completen tareas con apoyo de agentes y herramientas conectadas.',
    },
  },
  applications: {
    title: { en: 'What AI can add to your application', es: 'Qué puede aportar la IA a tu aplicación' },
    introduction: {
      en: 'The starting point is a concrete user need. Models, retrieval, and tools work together according to the task and the information available.',
      es: 'El punto de partida es una necesidad concreta del usuario. Modelos, recuperación y herramientas se combinan según la tarea y la información disponible.',
    },
    items: [
      {
        id: 'language-models',
        title: { en: 'Work with everyday language', es: 'Trabajar con lenguaje cotidiano' },
        description: {
          en: 'Use LLMs to interpret requests, summarize content, classify text, and extract structured information that an application can review and use.',
          es: 'Utilizar LLM para interpretar solicitudes, resumir contenido, clasificar texto y extraer información estructurada que una aplicación pueda revisar y utilizar.',
        },
      },
      {
        id: 'retrieval-augmented-generation',
        title: { en: 'Find answers in your information', es: 'Encontrar respuestas en tu información' },
        description: {
          en: 'Combine semantic search and RAG to retrieve relevant content from catalogs or documents and provide it to the model as context for its response.',
          es: 'Combinar búsqueda semántica y RAG para recuperar contenido relevante de catálogos o documentos y aportarlo al modelo como contexto para su respuesta.',
        },
      },
      {
        id: 'agents-and-tools',
        title: { en: 'Connect conversations with application functions', es: 'Conectar conversaciones con funciones de la aplicación' },
        description: {
          en: 'Give agents defined tools through tool calling to query records, look up details, or request authorized actions from existing services.',
          es: 'Proporcionar herramientas definidas a los agentes mediante tool calling para consultar registros, obtener detalles o solicitar acciones autorizadas a servicios existentes.',
        },
      },
      {
        id: 'agentic-workflows',
        title: { en: 'Coordinate tasks across multiple steps', es: 'Coordinar tareas de varios pasos' },
        description: {
          en: 'Organize retrieval, model responses, tool use, and user clarifications in workflows that preserve context and adapt their next step to the information received.',
          es: 'Organizar recuperación, respuestas del modelo, uso de herramientas y aclaraciones del usuario en flujos que conserven contexto y adapten el siguiente paso a la información recibida.',
        },
      },
    ],
  },
  integration: {
    title: { en: 'How these capabilities fit together', es: 'Cómo se integran estas capacidades' },
    introduction: {
      en: 'My work in this area combines orchestration with the application’s data and business rules.',
      es: 'Mi trabajo en este ámbito combina la orquestación con los datos y las reglas de negocio de la aplicación.',
    },
    items: [
      {
        id: 'semantic-kernel',
        title: { en: 'Orchestration with Semantic Kernel', es: 'Orquestación con Semantic Kernel' },
        description: {
          en: 'Connect language models and application functions within a shared flow, selecting the tools and context needed for each task.',
          es: 'Conectar modelos de lenguaje y funciones de la aplicación dentro de un flujo compartido, definiendo las herramientas y el contexto necesarios para cada tarea.',
        },
      },
      {
        id: 'context-and-relevance',
        title: { en: 'Relevant context', es: 'Contexto relevante' },
        description: {
          en: 'Structure the information available to the model and relate its responses to the sources retrieved, including cases where the available information is insufficient.',
          es: 'Organizar la información disponible para el modelo y relacionar sus respuestas con las fuentes recuperadas, incluyendo los casos en que la información disponible es insuficiente.',
        },
      },
      {
        id: 'business-integration',
        title: { en: 'Integration with business rules', es: 'Integración con las reglas de negocio' },
        description: {
          en: 'Define which operations tools can request, preserve application permissions, and include validation or human confirmation where the process requires it.',
          es: 'Definir qué operaciones pueden solicitar las herramientas, conservar los permisos de la aplicación e incorporar validación o confirmación humana donde el proceso lo requiera.',
        },
      },
    ],
  },
  technologies: {
    title: {"en":"Technologies and patterns I can apply","es":"Tecnologías y patrones que puedo aplicar"},
    introduction: {"en":"These tools and patterns support agents, knowledge retrieval, local inference, and connections to AI providers. I select the combination to fit the application’s data and processes.","es":"Estas herramientas y patrones permiten desarrollar agentes, recuperar conocimiento, ejecutar inferencia local y conectar proveedores de IA. Selecciono la combinación según los datos y procesos de la aplicación."},
    groups: aiTechnologyGroups,
  },
  example: {
    title: { en: 'A personal project exploring these capabilities', es: 'Un proyecto personal que explora estas capacidades' },
    body: {
      en: 'The specialist-search project applies this approach to matching a problem description with catalog profiles. Its case study explains the context, design, and scope of the work.',
      es: 'El proyecto de búsqueda de especialistas aplica este enfoque a relacionar la descripción de un problema con perfiles de un catálogo. Su caso de estudio explica el contexto, el diseño y el alcance del trabajo.',
    },
    actionLabel: { en: 'View the specialist-search project', es: 'Ver el proyecto de búsqueda de especialistas' },
    path: `/projects/${pc11CaseStudy.slug}`,
    contactLabel: { en: 'Tell me what you need to solve', es: 'Cuéntame qué necesitas resolver' },
  },
} as const satisfies AiApplicationsContent;
