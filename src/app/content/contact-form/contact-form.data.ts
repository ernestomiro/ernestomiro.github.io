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
      en: 'Send Ernesto Miró Peraza a private message and your preferred contact details.',
      es: 'Envía un mensaje privado a Ernesto Miró Peraza y tus datos de contacto preferidos.',
    },
  },
  hero: {
    backLabel: { en: 'Back to contact', es: 'Volver a contacto' },
    label: { en: 'Contact', es: 'Contacto' },
    title: { en: 'Leave a message.', es: 'Déjame un mensaje.' },
    lead: {
      en: 'Tell me briefly what you would like to discuss and how I can reach you.',
      es: 'Cuéntame brevemente qué te gustaría conversar y cómo puedo contactarte.',
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
      en: 'Secure messaging is not available yet.',
      es: 'La mensajería segura aún no está disponible.',
    },
    unavailableBody: {
      en: 'The service is enabled only in the local proof of concept until production hosting is confirmed.',
      es: 'El servicio está habilitado solo en la prueba de concepto local hasta confirmar el hosting de producción.',
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
