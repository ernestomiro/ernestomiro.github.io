import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BCPP_CONFIG } from './bcpp.config';
import {
  BcppProtectedEchoRequest,
  BcppProtectedEchoResponse,
} from './bcpp.models';

@Injectable({
  providedIn: 'root',
})
export class BcppClient {
  private readonly http = inject(HttpClient);
  private readonly config = inject(BCPP_CONFIG);

  protectedEcho(message: string): Observable<BcppProtectedEchoResponse> {
    if (!this.config.enabled || !this.config.apiBaseUrl) {
      return throwError(
        () => new Error('BCPP is not configured for this environment.'),
      );
    }

    const request: BcppProtectedEchoRequest = {
      message,
    };

    return this.http.post<BcppProtectedEchoResponse>(
      new URL('/api/protected-test/echo', this.config.apiBaseUrl).toString(),
      request,
    );
  }
}
