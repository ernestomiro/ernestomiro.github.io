import { HttpErrorResponse } from '@angular/common/http';
import { adminContent } from '../content/admin.data';
import { LanguageCode, selectLocalizedText } from '../content/portfolio-content.models';

function errorText(value: unknown, limit = 600): string {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

export function adminErrorText(error: unknown, language: LanguageCode): string {
  const t = (key: keyof typeof adminContent) => selectLocalizedText(adminContent[key], language);
  if (error instanceof HttpErrorResponse) {
    const body: unknown = error.error;
    const payload = typeof body === 'object' && body !== null ? body as Record<string, unknown> : {};
    const message = errorText(payload['message']);
    const code = errorText(payload['code'], 80);
    const details = (Array.isArray(payload['errors']) ? payload['errors'].slice(0, 5) : [])
      .map(value => errorText(value))
      .filter(Boolean);

    // Log only diagnostic fields, never request bodies, credentials or headers.
    console.error('[Message administration]', {
      status: error.status,
      code,
      traceId: errorText(payload['traceId'], 160),
      message,
      errors: details,
      browserMessage: errorText(error.message),
    });

    if (error.status === 0) return t('network');
    if (error.status === 409) return t('conflict');
    if (error.status === 401 && code !== 'AUTH004') return t('expired');
    return message || details[0] || t('requestFailed');
  }

  const message = error instanceof Error ? errorText(error.message) : '';
  console.error('[Message administration]', {
    name: error instanceof Error ? error.name : 'UnknownError',
    message,
  });
  return message || t('requestFailed');
}
