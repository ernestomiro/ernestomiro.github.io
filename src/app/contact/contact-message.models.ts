import { LanguageCode } from '../content/portfolio-content.models';

export interface ContactMessageRequest {
  readonly name: string;
  readonly email: string | null;
  readonly phone: string | null;
  readonly message: string;
  readonly language: LanguageCode;
  readonly consent: true;
}

export interface ContactMessageReceipt {
  readonly contactMessageId: string;
  readonly acceptedAtUtc: string;
  readonly status: 'received';
}
