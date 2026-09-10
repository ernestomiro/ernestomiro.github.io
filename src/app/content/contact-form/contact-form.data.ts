import type { ContactFailureReason } from '../../contact/contact-submission-error';
import { LocalizedText } from '../portfolio-content.models';

export const contactFormRoutePath = 'contact';
export const contactFormPath = '/contact' as const;

interface ContactFormContent {
  readonly metadata: {
    readonly title: LocalizedText;
    readonly description: LocalizedText;
  };
  readonly hero: {
    readonly backLabel: LocalizedText;
    readonly label: LocalizedText;
    readonly title: LocalizedText;
    readonly lead: LocalizedText;
  };
  readonly form: {
    readonly name: LocalizedText;
    readonly email: LocalizedText;
    readonly phone: LocalizedText;
    readonly contactHint: LocalizedText;
    readonly message: LocalizedText;
    readonly consent: LocalizedText;
    readonly submit: LocalizedText;
    readonly submitting: LocalizedText;
    readonly requiredHint: LocalizedText;
  };
  readonly validation: {
    readonly name: LocalizedText;
    readonly email: LocalizedText;
    readonly phone: LocalizedText;
    readonly contact: LocalizedText;
    readonly message: LocalizedText;
    readonly consent: LocalizedText;
    readonly summary: LocalizedText;
  };
  readonly status: {
    readonly successTitle: LocalizedText;
    readonly successBody: LocalizedText;
    readonly sendAnother: LocalizedText;
    readonly errorTitle: LocalizedText;
    readonly errorBody: LocalizedText;
    readonly unavailableTitle: LocalizedText;
    readonly unavailableBody: LocalizedText;
  };
  readonly diagnostics: {
    readonly code: LocalizedText;
    readonly reference: LocalizedText;
    readonly reasons: Record<ContactFailureReason, LocalizedText>;
  };
  readonly fallback: {
    readonly title: LocalizedText;
    readonly body: LocalizedText;
    readonly action: LocalizedText;
  };
}

export const contactFormContent = {
  metadata: {
    title: {
      en: 'Leave a message | Ernesto Miró Peraza',
      es: 'Déjame un mensaje | Ernesto Miró Peraza',
    },
    description: {
      en: 'Contact Ernesto Miró Peraza to address a software need, discuss a project, or share a job opportunity.',
      es: 'Contacta a Ernesto Miró Peraza para resolver una necesidad de software, conversar sobre un proyecto o compartir una oportunidad laboral.',
    },
  },
  hero: {
    backLabel: { en: 'Back to contact', es: 'Volver a contacto' },
    label: { en: 'Contact', es: 'Contacto' },
    title: { en: 'Leave a message.', es: 'Déjame un mensaje.' },
    lead: {
      en: 'Tell me what you need to solve, what you would like to improve, or what opportunity you have on your team. Include how I can reach you; you can explain the situation in your own words.',
      es: 'Cuéntame qué necesitas resolver, qué te gustaría mejorar o qué oportunidad tienes en tu equipo. Incluye cómo puedo contactarte; puedes explicar la situación con tus propias palabras.',
    },
  },
  form: {
    name: { en: 'Name', es: 'Nombre' },
    email: { en: 'Email', es: 'Correo electrónico' },
    phone: { en: 'Phone', es: 'Teléfono' },
    contactHint: {
      en: 'Provide at least an email or a phone number.',
      es: 'Indica al menos un correo electrónico o un teléfono.',
    },
    message: { en: 'Message', es: 'Mensaje' },
    consent: {
      en: 'I authorize the use of these details only to respond to my message.',
      es: 'Autorizo el uso de estos datos únicamente para responder a mi mensaje.',
    },
    submit: { en: 'Send message', es: 'Enviar mensaje' },
    submitting: { en: 'Sending…', es: 'Enviando…' },
    requiredHint: {
      en: 'Required fields are marked with an asterisk.',
      es: 'Los campos obligatorios están marcados con un asterisco.',
    },
  },
  validation: {
    name: {
      en: 'Enter a name between 2 and 100 characters.',
      es: 'Ingresa un nombre de 2 a 100 caracteres.',
    },
    email: {
      en: 'Enter a valid email address with no more than 254 characters.',
      es: 'Ingresa un correo válido de hasta 254 caracteres.',
    },
    phone: {
      en: 'Enter a valid phone number between 7 and 32 characters.',
      es: 'Ingresa un teléfono válido de 7 a 32 caracteres.',
    },
    contact: {
      en: 'Provide at least an email or a phone number.',
      es: 'Indica al menos un correo electrónico o un teléfono.',
    },
    message: {
      en: 'Enter a message between 10 and 2,000 characters.',
      es: 'Ingresa un mensaje de 10 a 2,000 caracteres.',
    },
    consent: {
      en: 'Consent is required before sending the message.',
      es: 'Debes autorizar el uso de los datos antes de enviar el mensaje.',
    },
    summary: {
      en: 'Review the highlighted fields and try again.',
      es: 'Revisa los campos señalados e inténtalo nuevamente.',
    },
  },
  status: {
    successTitle: { en: 'Message received.', es: 'Mensaje recibido.' },
    successBody: {
      en: 'Thank you. I will use your contact details only to respond to this message.',
      es: 'Gracias. Usaré tus datos de contacto únicamente para responder a este mensaje.',
    },
    sendAnother: { en: 'Send another message', es: 'Enviar otro mensaje' },
    errorTitle: { en: 'The message was not sent.', es: 'El mensaje no fue enviado.' },
    errorBody: {
      en: 'Please try again. You can also contact me directly by email.',
      es: 'Inténtalo nuevamente. También puedes contactarme directamente por correo.',
    },
    unavailableTitle: {
      en: 'The contact form is not available.',
      es: 'El formulario de contacto no está disponible.',
    },
    unavailableBody: {
      en: 'You can email me directly to tell me about your project or share a job opportunity.',
      es: 'Puedes escribirme directamente por correo electrónico para contarme tu proyecto o compartir una oportunidad laboral.',
    },
  },
  diagnostics: {
    code: {
      en: 'Error code',
      es: 'Código de error',
    },
    reference: {
      en: 'Reference',
      es: 'Referencia',
    },
    reasons: {
      network: {
        en: 'No readable response was received from the service. Check your connection. A browser block or service outage can also cause this error.',
        es: 'No se recibió una respuesta accesible del servicio. Comprueba tu conexión. Un bloqueo del navegador o una caída del servicio también pueden causar este error.',
      },
      server: {
        en: 'The service returned an internal error. Try again later or contact me by email.',
        es: 'El servicio devolvió un error interno. Inténtalo más tarde o contáctame por correo.',
      },
      request: {
        en: 'The service could not accept the request. The returned details are shown below.',
        es: 'El servicio no pudo aceptar la solicitud. A continuación se muestran los detalles recibidos.',
      },
      browser: {
        en: 'The browser could not complete the preparation or verification of the message. The error details are shown below.',
        es: 'El navegador no pudo completar la preparación o verificación del mensaje. A continuación se muestra el detalle del error.',
      },
      clock: {
        en: 'The request time is outside the allowed window. Check your device’s automatic date and time, then try again.',
        es: 'La hora de la solicitud está fuera del margen permitido. Comprueba la fecha y hora automáticas del dispositivo e inténtalo nuevamente.',
      },
      browserContext: {
        en: 'The service rejected the browser’s request context. Try opening the HTTPS link directly in an updated browser.',
        es: 'El servicio rechazó el contexto de la solicitud del navegador. Prueba a abrir el enlace HTTPS directamente en un navegador actualizado.',
      },
      challenge: {
        en: 'The security verification was invalid, expired, or could not be completed. Keep this page open and try again.',
        es: 'La verificación de seguridad no fue válida, caducó o no pudo completarse. Mantén esta página abierta e inténtalo nuevamente.',
      },
      rateLimit: {
        en: 'The service received too many requests. Wait a minute before trying again.',
        es: 'El servicio recibió demasiadas solicitudes. Espera un minuto antes de reintentarlo.',
      },
      unknown: {
        en: 'An unexpected error prevented confirmation of the submission. Try again or contact me by email.',
        es: 'Un error inesperado impidió confirmar el envío. Inténtalo nuevamente o contáctame por correo.',
      },
    },
  },
  fallback: {
    title: { en: 'Prefer email?', es: '¿Prefieres el correo?' },
    body: {
      en: 'You can contact me directly without using this form.',
      es: 'Puedes contactarme directamente sin utilizar este formulario.',
    },
    action: { en: 'Send an email', es: 'Enviar un correo' },
  },
} as const satisfies ContactFormContent;
