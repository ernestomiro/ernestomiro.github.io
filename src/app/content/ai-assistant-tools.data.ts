import { LocalizedText } from './portfolio-content.models';

interface AiAssistantToolsContent {
  readonly title: LocalizedText;
  readonly toolNames: LocalizedText;
  readonly description: LocalizedText;
}

export const aiAssistantToolsContent = {
  title: {
    en: 'My AI tools in Visual Studio Code',
    es: 'Mis herramientas de IA en Visual Studio Code',
  },
  toolNames: {
    en: 'Codex and Claude Code',
    es: 'Codex y Claude Code',
  },
  description: {
    en: 'I use both tools through their Visual Studio Code extensions and the integrated terminal to analyze code, plan tasks, and implement and review changes with the project’s context. I define the scope and review the results, keeping control of technical decisions.',
    es: 'Uso ambas herramientas mediante sus extensiones en Visual Studio Code y la terminal integrada para analizar código, planificar tareas e implementar y revisar cambios con el contexto del proyecto. Defino el alcance y reviso los resultados, manteniendo el control de las decisiones técnicas.',
  },
} as const satisfies AiAssistantToolsContent;
