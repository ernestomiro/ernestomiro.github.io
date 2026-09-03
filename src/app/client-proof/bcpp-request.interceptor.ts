import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, from, switchMap, tap } from 'rxjs';
import { BcppBrowserKey } from './bcpp-browser-key';
import { BCPP_CONFIG, BcppConfig } from './bcpp.config';
import { encodeBase64Url } from './bcpp-encoding';
import { BcppEnrollment } from './bcpp-enrollment';
import { parseBcppProofToken } from './bcpp-proof-token';
import { BcppRequestGate } from './bcpp-request-gate';

const headerNames = {
  session: 'X-BCPP-Session',
  token: 'X-BCPP-Token',
  requestId: 'X-BCPP-Request-Id',
  timestamp: 'X-BCPP-Timestamp',
  bodySha256: 'X-BCPP-Body-SHA256',
  signature: 'X-BCPP-Signature',
} as const;

export const bcppRequestInterceptor: HttpInterceptorFn = (request, next) => {
  const config = inject(BCPP_CONFIG);
  if (!isProtectedRequest(request, config)) {
    return next(request);
  }

  const enrollment = inject(BcppEnrollment);
  const browserKey = inject(BcppBrowserKey);
  const requestGate = inject(BcppRequestGate);

  return requestGate.enqueue(() => {
    let tokenStateResolved = false;

    return from(
      signRequest(request, config.apiBaseUrl, enrollment, browserKey),
    ).pipe(
      switchMap((signedRequest) => next(signedRequest)),
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            tokenStateResolved = true;
            if (
              !enrollment.acceptNextToken(
                event.headers.get(headerNames.token),
              )
            ) {
              enrollment.invalidate();
            }
          }
        },
        error: (error: unknown) => {
          tokenStateResolved = true;
          if (isRateLimitRejection(error)) {
            return;
          }

          const replacement =
            error instanceof HttpErrorResponse
              ? error.headers.get(headerNames.token)
              : null;
          if (!enrollment.acceptNextToken(replacement)) {
            enrollment.invalidate();
          }
        },
      }),
      finalize(() => {
        if (!tokenStateResolved) {
          enrollment.invalidate();
        }
      }),
    );
  });
};

async function signRequest(
  request: HttpRequest<unknown>,
  apiBaseUrl: string,
  enrollment: BcppEnrollment,
  browserKey: BcppBrowserKey,
): Promise<HttpRequest<unknown>> {
  const url = new URL(request.urlWithParams, apiBaseUrl);
  if (url.search) {
    throw new Error(
      'BCPP query normalization is not enabled for this POC stage.',
    );
  }

  const session = await enrollment.getOrEnroll();
  const token = parseBcppProofToken(session.nextToken.value);
  if (token.expiresUnixMilliseconds <= Date.now() + 1_000) {
    throw new Error('The BCPP proof token is expired.');
  }

  const requestId = globalThis.crypto.randomUUID();
  const timestamp = Date.now().toString();
  const bodyHash = await hashSerializedBody(request);
  const canonical = new TextEncoder().encode(
    [
      'BCPP-REQUEST-V1',
      session.sessionId,
      token.id,
      requestId,
      timestamp,
      request.method.toUpperCase(),
      url.pathname,
      bodyHash,
    ].join('\n'),
  );
  const signature = await browserKey.sign(canonical);

  return request.clone({
    setHeaders: {
      [headerNames.session]: session.sessionId,
      [headerNames.token]: token.value,
      [headerNames.requestId]: requestId,
      [headerNames.timestamp]: timestamp,
      [headerNames.bodySha256]: bodyHash,
      [headerNames.signature]: signature,
    },
  });
}

async function hashSerializedBody(
  request: HttpRequest<unknown>,
): Promise<string> {
  const body = request.serializeBody();
  let bytes: Uint8Array<ArrayBuffer>;

  if (body === null) {
    bytes = new Uint8Array();
  } else if (typeof body === 'string') {
    bytes = new TextEncoder().encode(body);
  } else if (body instanceof ArrayBuffer) {
    bytes = new Uint8Array(body);
  } else if (body instanceof Blob) {
    bytes = new Uint8Array(await body.arrayBuffer());
  } else if (body instanceof URLSearchParams) {
    bytes = new TextEncoder().encode(body.toString());
  } else {
    throw new Error(
      'BCPP does not support FormData bodies because their wire encoding is not deterministic.',
    );
  }

  const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes);
  return encodeBase64Url(digest);
}

function isRateLimitRejection(error: unknown): boolean {
  if (!(error instanceof HttpErrorResponse) || error.status !== 429) {
    return false;
  }

  const body = error.error;
  return (
    typeof body === 'object' &&
    body !== null &&
    (body as { readonly code?: unknown }).code === 'BCPP012'
  );
}

function isProtectedRequest(
  request: HttpRequest<unknown>,
  config: BcppConfig,
): boolean {
  if (!config.enabled || !config.apiBaseUrl) {
    return false;
  }

  const apiUrl = new URL(config.apiBaseUrl);
  const requestUrl = new URL(request.urlWithParams, apiUrl);
  return (
    requestUrl.origin === apiUrl.origin &&
    config.protectedPaths.some((path) => requestUrl.pathname === path)
  );
}
