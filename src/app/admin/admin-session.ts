import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { BCPP_CONFIG } from '../client-proof/bcpp.config';

interface SessionResponse { readonly authenticated: boolean; readonly email: string | null; }

@Injectable({ providedIn: 'root' })
export class AdminSession {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly config = inject(BCPP_CONFIG);
  private pending: Promise<void> | undefined;
  readonly user = signal<string | null>(null);
  readonly initialized = signal(false);
  readonly expired = signal(false);
  readonly csrfToken = signal<string | null>(null);

  url(path = ''): string {
    return new URL('/api/admin/session' + path, this.config.apiBaseUrl).toString();
  }

  restore(): Promise<void> {
    if (!isPlatformBrowser(this.platformId) || this.initialized()) return Promise.resolve();
    return this.refresh();
  }

  refresh(): Promise<void> {
    if (!this.pending) {
      this.pending = firstValueFrom(this.http.get<SessionResponse>(this.url(), { transferCache: false }))
        .then(session => {
          this.user.set(session.authenticated ? session.email : null);
          this.initialized.set(true);
          if (session.authenticated) this.expired.set(false);
        })
        .finally(() => { this.pending = undefined; });
    }
    return this.pending;
  }

  async prepareCsrf(): Promise<void> {
    const response = await firstValueFrom(this.http.get<{ requestToken: string }>(
      this.url('/csrf'), { transferCache: false }));
    this.csrfToken.set(response.requestToken);
  }

  async login(email: string, password: string): Promise<void> {
    await this.prepareCsrf();
    await firstValueFrom(this.http.post<void>(this.url('/login'), { email, password }));
    this.csrfToken.set(null);
    // An initial anonymous session check may still be in flight.
    await this.pending?.catch(() => {});
    await this.refresh();
    if (!this.user()) {
      throw new Error('The session cookie was not accepted. Allow cookies for this site and API.');
    }
    await this.prepareCsrf();
  }

  async logout(): Promise<void> {
    await this.prepareCsrf();
    try {
      await firstValueFrom(this.http.post<void>(this.url('/logout'), {}));
    } catch (error) {
      if (!(error instanceof HttpErrorResponse) || error.status !== 401) throw error;
    }
    this.clear();
  }

  clear(expired = false): void {
    this.expired.set(expired);
    this.user.set(null);
    this.csrfToken.set(null);
    this.initialized.set(true);
  }
}
