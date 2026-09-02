import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { BcppBrowserKey } from './bcpp-browser-key';
import { BcppChallengeWorker } from './bcpp-challenge-worker';
import { BcppClient } from './bcpp-client';
import { BcppEnrollmentSession } from './bcpp.models';

@Injectable({
  providedIn: 'root',
})
export class BcppEnrollment {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly browserKey = inject(BcppBrowserKey);
  private readonly challengeWorker = inject(BcppChallengeWorker);
  private readonly client = inject(BcppClient);
  private readonly sessionState = signal<BcppEnrollmentSession | undefined>(
    undefined,
  );
  private enrollmentInFlight: Promise<BcppEnrollmentSession> | undefined;

  readonly session = this.sessionState.asReadonly();

  enroll(): Promise<BcppEnrollmentSession> {
    if (!this.enrollmentInFlight) {
      this.enrollmentInFlight = this.runEnrollment().finally(() => {
        this.enrollmentInFlight = undefined;
      });
    }

    return this.enrollmentInFlight;
  }

  private async runEnrollment(): Promise<BcppEnrollmentSession> {
    const publicKeyJwk = await this.browserKey.getPublicJwk();
    const challenge = await firstValueFrom(
      this.client.startEnrollment({
        publicKeyJwk,
        capabilities: {
          webCrypto: Boolean(globalThis.crypto?.subtle),
          dedicatedWorker:
            isPlatformBrowser(this.platformId) && typeof Worker !== 'undefined',
          secureContext: globalThis.isSecureContext === true,
        },
      }),
    );
    const challengeResult = await this.challengeWorker.solve(challenge);
    const canonical = new TextEncoder().encode(
      [
        'BCPP-ENROLL-V1',
        challenge.challengeId,
        challenge.nonce,
        challengeResult,
        challenge.publicKeyThumbprint,
      ].join('\n'),
    );
    const signature = await this.browserKey.sign(canonical);
    const session = await firstValueFrom(
      this.client.completeEnrollment({
        challengeId: challenge.challengeId,
        nonce: challenge.nonce,
        challengeResult,
        signature,
      }),
    );

    this.sessionState.set(session);
    return session;
  }
}
