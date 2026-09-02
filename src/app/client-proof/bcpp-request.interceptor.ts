import {
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { from, switchMap } from 'rxjs';
import { BcppBrowserKey } from './bcpp-browser-key';
import { BCPP_CONFIG, BcppConfig } from './bcpp.config';
import { encodeBase64Url } from './bcpp-encoding';
import { BcppEnrollment } from './bcpp-enrollment';

const headerNames = {
  session: 'X-BCPP-Session',
  requestId: 'X-BCPP-Request-Id',
  timestamp: 'X-BCPP-Timestamp',
  signature: 'X-BCPP-Signature',
} as const;

export const bcppRequestInterceptor: HttpInterceptorFn = (request, next) => {
  const config = inject(BCPP_CONFIG);
  if (!isProtectedRequest(request, config)) {
    return next(request);
  }

  const enrollment = inject(BcppEnrollment);
  const browserKey = inject(BcppBrowserKey);

  return from(
    signRequest(request, config.apiBaseUrl, enrollment, browserKey),
  ).pipe(
    switchMap((signedRequest) => next(signedRequest)),
  );
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
  const requestId = globalThis.crypto.randomUUID();
  const timestamp = Date.now().toString();
  const bodyHash = await hashSerializedBody(request);
  const canonical = new TextEncoder().encode(
    [
      'BCPP-REQUEST-V1',
      session.sessionId,
      '',
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
      [headerNames.requestId]: requestId,
      [headerNames.timestamp]: timestamp,
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
