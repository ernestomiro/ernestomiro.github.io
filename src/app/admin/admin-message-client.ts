import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { BCPP_CONFIG } from '../client-proof/bcpp.config';
import { ContactMessageRequest } from '../contact/contact-message.models';
import { AdminSession } from './admin-session';

export type MessageStatus = 'New' | 'Read';
export interface MessageSummary {
  readonly id: string; readonly name: string; readonly email: string | null;
  readonly phone: string | null; readonly status: MessageStatus; readonly createdAtUtc: string;
}
export interface ManagedMessage extends MessageSummary {
  readonly message: string; readonly language: 'en' | 'es'; readonly consentAtUtc: string;
  readonly expiresAtUtc: string; readonly version: string;
}
export interface MessagePage {
  readonly items: readonly MessageSummary[]; readonly page: number;
  readonly pageSize: number; readonly total: number;
}

@Injectable({ providedIn: 'root' })
export class AdminMessageClient {
  private readonly http = inject(HttpClient);
  private readonly session = inject(AdminSession);
  private readonly config = inject(BCPP_CONFIG);
  private url(path = ''): string {
    return new URL('/api/admin/messages' + path, this.config.apiBaseUrl).toString();
  }
  private async ready(): Promise<void> {
    if (!this.session.csrfToken()) await this.session.prepareCsrf();
  }
  async list(page: number, status: MessageStatus | ''): Promise<MessagePage> {
    await this.ready();
    return firstValueFrom(this.http.post<MessagePage>(this.url('/search'), { page, status: status || null }));
  }
  get(id: string): Promise<ManagedMessage> {
    return firstValueFrom(this.http.get<ManagedMessage>(this.url('/' + encodeURIComponent(id)), { transferCache: false }));
  }
  async save(content: ContactMessageRequest, status: MessageStatus, original: ManagedMessage | null): Promise<ManagedMessage> {
    await this.ready();
    const body = { content, status, version: original?.version };
    return firstValueFrom(original
      ? this.http.put<ManagedMessage>(this.url('/' + encodeURIComponent(original.id)), body)
      : this.http.post<ManagedMessage>(this.url(), body));
  }
  async setStatus(message: ManagedMessage, status: MessageStatus): Promise<ManagedMessage> {
    await this.ready();
    return firstValueFrom(this.http.put<ManagedMessage>(
      this.url('/' + encodeURIComponent(message.id) + '/status'), { status, version: message.version }));
  }
  async delete(message: ManagedMessage): Promise<void> {
    await this.ready();
    return firstValueFrom(this.http.delete<void>(this.url('/' + encodeURIComponent(message.id)),
      { body: { version: message.version } }));
  }
}
