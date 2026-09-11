import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { BCPP_CONFIG } from '../client-proof/bcpp.config';
import { AdminSession } from './admin-session';

export const adminSessionInterceptor: HttpInterceptorFn = (request, next) => {
  const config = inject(BCPP_CONFIG);
  if (!config.apiBaseUrl) return next(request);
  const base = new URL(config.apiBaseUrl);
  const url = new URL(request.url, base);
  if (url.origin !== base.origin || !url.pathname.startsWith('/api/admin/')) {
    return next(request);
  }
  const session = inject(AdminSession);
  const token = session.csrfToken();
  const unsafe = !['GET', 'HEAD', 'OPTIONS'].includes(request.method);
  const authenticatedRequest = request.clone({
    withCredentials: true,
    transferCache: false,
    ...(unsafe && token ? { setHeaders: { 'X-CSRF-Token': token } } : {}),
  });
  return next(authenticatedRequest).pipe(catchError((error: unknown) => {
    if (error instanceof HttpErrorResponse
      && url.pathname !== '/api/admin/session/login'
      && (error.status === 401 || (error.status === 403 && error.error?.code === 'AUTH002'))) {
      session.clear(true);
    }
    return throwError(() => error);
  }));
};
