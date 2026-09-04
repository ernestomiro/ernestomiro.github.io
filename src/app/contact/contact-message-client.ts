import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BCPP_CONFIG } from '../client-proof/bcpp.config';
import {
  ContactMessageReceipt,
  ContactMessageRequest,
} from './contact-message.models';

@Injectable({ providedIn: 'root' })
export class ContactMessageClient {
  private readonly http = inject(HttpClient);
  private readonly config = inject(BCPP_CONFIG);

  readonly isConfigured = Boolean(
    this.config.enabled && this.config.apiBaseUrl,
  );

  submit(request: ContactMessageRequest): Observable<ContactMessageReceipt> {
    if (!this.isConfigured) {
      return throwError(
        () => new Error('The secure contact service is not configured.'),
      );
    }

    return this.http.post<ContactMessageReceipt>(
      new URL('/api/contact-messages', this.config.apiBaseUrl).toString(),
      request,
    );
  }
}
