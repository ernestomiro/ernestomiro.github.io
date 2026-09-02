import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BCPP_CONFIG } from './bcpp.config';
import {
  BcppEnrollmentChallenge,
  BcppEnrollmentCompleteRequest,
  BcppEnrollmentSession,
  BcppEnrollmentStartRequest,
  BcppProtectedEchoRequest,
  BcppProtectedEchoResponse,
} from './bcpp.models';

@Injectable({
  providedIn: 'root',
})
export class BcppClient {
  private readonly http = inject(HttpClient);
  private readonly config = inject(BCPP_CONFIG);

  startEnrollment(
    request: BcppEnrollmentStartRequest,
  ): Observable<BcppEnrollmentChallenge> {
    return this.post<BcppEnrollmentChallenge>(
      '/api/client-proof/enrollment/start',
      request,
    );
  }

  completeEnrollment(
    request: BcppEnrollmentCompleteRequest,
  ): Observable<BcppEnrollmentSession> {
    return this.post<BcppEnrollmentSession>(
      '/api/client-proof/enrollment/complete',
      request,
    );
  }

  protectedEcho(message: string): Observable<BcppProtectedEchoResponse> {
    const request: BcppProtectedEchoRequest = {
      message,
    };

    return this.post<BcppProtectedEchoResponse>(
      '/api/protected-test/echo',
      request,
    );
  }

  private post<TResponse>(path: string, body: unknown): Observable<TResponse> {
    if (!this.config.enabled || !this.config.apiBaseUrl) {
      return throwError(
        () => new Error('BCPP is not configured for this environment.'),
      );
    }

    return this.http.post<TResponse>(
      new URL(path, this.config.apiBaseUrl).toString(),
      body,
    );
  }
}
