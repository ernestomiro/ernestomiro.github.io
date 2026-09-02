import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  BcppChallengeWorkRequest,
  BcppChallengeWorkResponse,
  BcppEnrollmentChallenge,
} from './bcpp.models';

@Injectable({
  providedIn: 'root',
})
export class BcppChallengeWorker {
  private readonly platformId = inject(PLATFORM_ID);

  solve(challenge: BcppEnrollmentChallenge): Promise<string> {
    if (!isPlatformBrowser(this.platformId) || typeof Worker === 'undefined') {
      return Promise.reject(
        new Error('BCPP enrollment requires a dedicated Web Worker.'),
      );
    }

    const request: BcppChallengeWorkRequest = {
      requestId: globalThis.crypto.randomUUID(),
      challengeId: challenge.challengeId,
      nonce: challenge.nonce,
      publicKeyThumbprint: challenge.publicKeyThumbprint,
      challengeProfile: challenge.challengeProfile,
    };
    const worker = new Worker(
      new URL('./bcpp-challenge.worker', import.meta.url),
      { type: 'module' },
    );

    return new Promise<string>((resolve, reject) => {
      const timeoutId = globalThis.setTimeout(() => {
        worker.terminate();
        reject(new Error('BCPP challenge worker timed out.'));
      }, 7_000);

      worker.onmessage = ({
        data,
      }: MessageEvent<BcppChallengeWorkResponse>): void => {
        if (data.requestId !== request.requestId) {
          return;
        }

        globalThis.clearTimeout(timeoutId);
        worker.terminate();

        if ('error' in data) {
          reject(new Error(data.error));
          return;
        }

        resolve(data.result);
      };

      worker.onerror = (): void => {
        globalThis.clearTimeout(timeoutId);
        worker.terminate();
        reject(new Error('BCPP challenge worker failed.'));
      };

      worker.postMessage(request);
    });
  }
}
