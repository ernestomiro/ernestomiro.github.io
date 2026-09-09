import { aiApplicationsContent } from './ai-applications.data';
import { methodologyContent } from './methodology/methodology.data';
import { AiCapabilitiesContent } from './portfolio-content.models';

export const aiCapabilitiesContent = {
  title: {
    en: 'Artificial Intelligence',
    es: 'Inteligencia artificial',
  },
  introduction: {
    en: 'I work with AI in two areas: supporting software development and integrating agents, knowledge retrieval, and tools into applications to help users find information and complete tasks.',
    es: 'Trabajo con IA en dos ámbitos: apoyar el desarrollo de software e integrar agentes, recuperación de conocimiento y herramientas en aplicaciones para ayudar a los usuarios a encontrar información y completar tareas.',
  },
  cards: [
    {
      id: 'ai-assisted-engineering',
      ...methodologyContent.teaser,
    },
    {
      id: 'ai-in-applications',
      ...aiApplicationsContent.teaser,
    },
  ],
} as const satisfies AiCapabilitiesContent;
