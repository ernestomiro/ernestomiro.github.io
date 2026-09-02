/// <reference lib="webworker" />

import { encodeBase64Url } from './bcpp-encoding';
import {
  BcppChallengeWorkRequest,
  BcppChallengeWorkResponse,
} from './bcpp.models';

addEventListener(
  'message',
  async ({ data }: MessageEvent<BcppChallengeWorkRequest>) => {
    let response: BcppChallengeWorkResponse;

    try {
      if (data.challengeProfile !== 'sha256-v1') {
        throw new Error('Unsupported BCPP challenge profile.');
      }

      const canonical = [
        'BCPP-CHALLENGE-V1',
        data.challengeId,
        data.nonce,
        data.publicKeyThumbprint,
      ].join('\n');
      const digest = await crypto.subtle.digest(
        'SHA-256',
        new TextEncoder().encode(canonical),
      );

      response = {
        requestId: data.requestId,
        result: encodeBase64Url(digest),
      };
    } catch (error: unknown) {
      response = {
        requestId: data.requestId,
        error: error instanceof Error ? error.message : 'Challenge failed.',
      };
    }

    postMessage(response);
  },
);
