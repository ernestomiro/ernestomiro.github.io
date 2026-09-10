import { HttpErrorResponse } from '@angular/common/http';

export type ContactFailureReason =
  | 'network'
  | 'server'
  | 'request'
  | 'browser'
  | 'clock'
  | 'browserContext'
  | 'challenge'
  | 'rateLimit'
  | 'unknown';

export interface ContactSubmissionError {
  readonly reason: ContactFailureReason;
  readonly details: readonly string[];
  readonly httpStatus?: number;
  readonly code?: string;
  readonly traceId?: string;
}

export function describeContactSubmissionError(
  error: unknown,
): ContactSubmissionError {
  if (error instanceof HttpErrorResponse) {
    if (error.status === 0) {
      return { reason: 'network', details: [] };
    }

    const body: unknown = error.error;
    const payload =
      typeof body === 'object' && body !== null && !Array.isArray(body)
        ? (body as Record<string, unknown>)
        : undefined;
    const code = shortText(payload?.['code'], 80);
    const traceId = shortText(payload?.['traceId'], 160);
    const message = shortText(payload?.['message']);
    const errors = payload?.['errors'];
    const validation = Array.isArray(errors)
      ? errors.slice(0, 5).map((item: unknown) => shortText(item))
      : [];
    const details = [
      ...new Set(
        [message, ...validation].filter((item): item is string => Boolean(item)),
      ),
    ];

    let reason: ContactFailureReason =
      error.status >= 500 ? 'server' : 'request';
    if (error.status === 429) {
      reason = 'rateLimit';
    } else if (code === 'BCPP005') {
      reason = 'clock';
    } else if (code === 'BCPP003') {
      reason = 'browserContext';
    } else if (code === 'BCPP010') {
      reason = 'challenge';
    }

    return { reason, details, httpStatus: error.status, code, traceId };
  }

  const message = error instanceof Error ? shortText(error.message) : undefined;
  return {
    reason: message ? 'browser' : 'unknown',
    details: message ? [message] : [],
  };
}

function shortText(value: unknown, limit = 600): string | undefined {
  if (typeof value !== 'string') {
    return undefined;
  }
  const text = value.trim();
  return text ? text.slice(0, limit) : undefined;
}
