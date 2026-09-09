import { aiTechnologyGroups } from '../ai-technologies.data';
import { CaseStudy } from './case-study.models';

export const pc11CaseStudy = {
  id: 'conversational-specialist-search-agent',
  slug: 'conversational-specialist-search-agent',
  title: {
    en: 'Conversational AI Agent for Specialist Search',
    es: 'Agente conversacional para búsqueda de especialistas',
  },
  role: {
    en: 'Solution Design & Partial Implementation',
    es: 'Diseño de solución e implementación parcial',
  },
  summary: {
    en: 'Personal prototype to help people find specialists by describing a problem, even when they do not know which specialty to search for. It combines Semantic Kernel, RAG over a vectorized catalog, and tool calling within an agentic workflow.',
    es: 'Prototipo personal para ayudar a encontrar especialistas a partir de la descripción de un problema, incluso cuando el usuario no sabe qué especialidad buscar. Combina Semantic Kernel, RAG sobre un catálogo vectorizado y llamada a herramientas dentro de un flujo con agentes.',
  },
  context: {
    en: 'A specialist-search service needs to connect needs expressed in everyday language with catalog information about professional roles, functions, and the problems they address. I explored this scenario through a personal proof of concept with a partial implementation and a design for the complete workflow.',
    es: 'Un servicio de búsqueda de especialistas necesita relacionar necesidades expresadas en lenguaje cotidiano con información de catálogo sobre perfiles, funciones y problemas que atienden. Exploré este escenario mediante una prueba de concepto personal con implementación parcial y un diseño del flujo completo.',
  },
  problem: {
    en: 'A person may recognize a problem without knowing the professional terms or categories needed to find help. Incomplete descriptions and wording that differs from the catalog make it harder to identify relevant options and create a need for clarification during the search.',
    es: 'Una persona puede reconocer un problema sin conocer los términos profesionales o las categorías necesarias para encontrar ayuda. Las descripciones incompletas y el uso de palabras distintas a las del catálogo dificultan identificar opciones relevantes y hacen necesario aclarar la necesidad durante la búsqueda.',
  },
  roleAndScope: {
    en: 'I defined the solution and implemented part of the prototype using Semantic Kernel, retrieval from a vectorized catalog, and tool calling. My work combines the design of retrieval, application tools, and conversational interaction.',
    es: 'Definí la solución e implementé parte del prototipo utilizando Semantic Kernel, recuperación sobre un catálogo vectorizado y llamada a herramientas. Mi trabajo combina el diseño de la recuperación, las herramientas de la aplicación y la interacción conversacional.',
  },
  solutionAndArchitecture: {
    en: 'The intended flow starts with catalog profiles, their functions, and the problems they address, linked to vector representations and their source records. A user describes a need, the application retrieves related candidates, and an LLM uses that context to explain possible matches. Semantic Kernel coordinates the model and application tools. The design includes follow-up questions, renewed retrieval when the user clarifies the need, and an explicit response when the catalog offers insufficient matches.',
    es: 'El flujo previsto parte de perfiles del catálogo, sus funciones y los problemas que atienden, vinculados a representaciones vectoriales y sus registros de origen. El usuario describe una necesidad, la aplicación recupera candidatos relacionados y un LLM utiliza ese contexto para explicar posibles coincidencias. Semantic Kernel coordina el modelo y las herramientas de la aplicación. El diseño contempla preguntas de seguimiento, nuevas búsquedas cuando el usuario aclara la necesidad y una respuesta explícita cuando el catálogo ofrece coincidencias insuficientes.',
  },
  outcome: {
    en: 'The work produced a partial prototype and a design that connects catalog retrieval, tool calling, and conversational interaction for specialist search.',
    es: 'El trabajo dio lugar a un prototipo parcial y a un diseño que relaciona la recuperación en el catálogo, la llamada a herramientas y la interacción conversacional para la búsqueda de especialistas.',
  },
  diagrams: [
    {
      id: 'intended-search-workflow',
      title: {
        en: 'Intended conversational workflow',
        es: 'Flujo conversacional previsto',
      },
      accessibleName: {
        en: 'Planned flow from a problem description to catalog retrieval and an explanation of matches, with clarification feeding a refined search.',
        es: 'Flujo previsto desde la descripción de un problema hasta la recuperación en el catálogo y la explicación de coincidencias, con aclaraciones que alimentan una búsqueda refinada.',
      },
      paths: [
        {
          id: 'initial-search',
          nodes: [
            { en: 'Describe the need', es: 'Describir la necesidad' },
            { en: 'Retrieve catalog candidates', es: 'Recuperar candidatos del catálogo' },
            { en: 'Explain possible matches', es: 'Explicar posibles coincidencias' },
          ],
        },
        {
          id: 'follow-up',
          nodes: [
            { en: 'Clarify the need', es: 'Aclarar la necesidad' },
            { en: 'Refine the search', es: 'Refinar la búsqueda' },
            { en: 'Update the options', es: 'Actualizar las opciones' },
          ],
        },
      ],
      annotations: [
        {
          en: 'Conceptual workflow · Personal prototype',
          es: 'Flujo conceptual · Prototipo personal',
        },
      ],
    },
  ],
  technologies: aiTechnologyGroups,
  decisions: [
    {
      id: 'catalog-grounding',
      title: {
        en: 'Ground suggestions in the catalog',
        es: 'Fundamentar las propuestas en el catálogo',
      },
      description: {
        en: 'The design uses retrieved profile information to explain matches. The model should not add specialties, credentials, or services absent from the source records.',
        es: 'El diseño utiliza información recuperada de los perfiles para explicar coincidencias. El modelo no debe añadir especialidades, credenciales o servicios ausentes de los registros de origen.',
      },
    },
    {
      id: 'controlled-tools',
      title: {
        en: 'Keep retrieval behind application tools',
        es: 'Controlar la consulta mediante herramientas de la aplicación',
      },
      description: {
        en: 'The intended tool responsibilities are candidate search and profile lookup. The application defines the information available to the model and the operations it may request.',
        es: 'Las responsabilidades previstas de las herramientas son la búsqueda de candidatos y la consulta de perfiles. La aplicación define la información disponible para el modelo y las operaciones que puede solicitar.',
      },
    },
    {
      id: 'clarification-and-no-match',
      title: {
        en: 'Clarify instead of forcing a match',
        es: 'Aclarar antes de forzar una coincidencia',
      },
      description: {
        en: 'The target interaction asks for missing information or explains when the catalog lacks relevant options. A catalog match is a search aid, not a guarantee of professional suitability.',
        es: 'La interacción prevista solicita información faltante o explica cuándo el catálogo carece de opciones relevantes. Una coincidencia de catálogo orienta la búsqueda; no garantiza la idoneidad profesional.',
      },
    },
  ],
  challenges: [
    {
      en: 'Connecting user clarifications with renewed retrieval while preserving conversational context.',
      es: 'Conectar las aclaraciones del usuario con nuevas búsquedas conservando el contexto de la conversación.',
    },
    {
      en: 'Handling ambiguous descriptions and catalogs without sufficiently relevant candidates.',
      es: 'Gestionar descripciones ambiguas y catálogos sin candidatos suficientemente relevantes.',
    },
    {
      en: 'Keeping explanations faithful to catalog sources and communicating retrieval failures clearly.',
      es: 'Mantener las explicaciones fieles a las fuentes del catálogo y comunicar los fallos de consulta con claridad.',
    },
  ],
} as const satisfies CaseStudy;
