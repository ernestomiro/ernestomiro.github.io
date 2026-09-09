import { TechnologyGroup } from './portfolio-content.models';

export const aiTechnologyGroups = [
  {
    "id": "ai-orchestration",
    "label": {
      "en": "AI Orchestration",
      "es": "Orquestación de IA"
    },
    "items": [
      "Semantic Kernel SDK",
      "LLM Integration",
      "AI Agents",
      "Tool Calling / Function Calling",
      "Agentic Workflows",
      "Multi-Agent Orchestration"
    ]
  },
  {
    "id": "knowledge-retrieval",
    "label": {
      "en": "Knowledge Retrieval",
      "es": "Recuperación de conocimiento"
    },
    "items": [
      "Embeddings",
      "Semantic Search",
      "Vector Search",
      "RAG Architecture",
      "PostgreSQL + pgvector",
      "Cosine Similarity",
      "Top-K Retrieval"
    ]
  },
  {
    "id": "model-integration-inference",
    "label": {
      "en": "Model Integration & Inference",
      "es": "Integración de modelos e inferencia"
    },
    "items": [
      "ONNX Runtime",
      "Local Model Inference",
      "Hugging Face Tokenization",
      "Embedding Models",
      "Transformer Models",
      "Model Artifacts"
    ]
  },
  {
    "id": "ai-application-patterns",
    "label": {
      "en": "AI Application Patterns",
      "es": "Patrones de aplicaciones con IA"
    },
    "items": [
      "Human-in-the-Loop",
      "Structured Outputs",
      "Event-Driven Agents",
      "Background Agents",
      "Database Tools",
      "External API Tools"
    ]
  },
  {
    "id": "ai-provider-sdk-integration",
    "label": {
      "en": "AI Provider & SDK Integration",
      "es": "Integración de proveedores y SDK de IA"
    },
    "items": [
      "OpenAI SDK",
      "Azure OpenAI SDK",
      "Anthropic SDK",
      "Google Gemini SDK",
      "REST API Integration"
    ]
  }
] as const satisfies readonly TechnologyGroup[];
