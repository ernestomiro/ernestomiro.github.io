import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { encodeBase64Url } from './bcpp-encoding';

@Injectable({
  providedIn: 'root',
})
export class BcppBrowserKey {
  private readonly platformId = inject(PLATFORM_ID);
  private keyPair: CryptoKeyPair | undefined;

  async getPublicJwk(): Promise<JsonWebKey> {
    const keyPair = await this.getOrCreateKeyPair();
    const publicKeyJwk = await globalThis.crypto.subtle.exportKey(
      'jwk',
      keyPair.publicKey,
    );

    return {
      kty: publicKeyJwk.kty,
      crv: publicKeyJwk.crv,
      x: publicKeyJwk.x,
      y: publicKeyJwk.y,
    };
  }

  async sign(canonical: BufferSource): Promise<string> {
    const keyPair = await this.getOrCreateKeyPair();
    const signature = await globalThis.crypto.subtle.sign(
      {
        name: 'ECDSA',
        hash: 'SHA-256',
      },
      keyPair.privateKey,
      canonical,
    );

    return encodeBase64Url(signature);
  }

  rotate(): void {
    this.keyPair = undefined;
  }

  private async getOrCreateKeyPair(): Promise<CryptoKeyPair> {
    this.assertBrowserCrypto();

    if (!this.keyPair) {
      this.keyPair = (await globalThis.crypto.subtle.generateKey(
        {
          name: 'ECDSA',
          namedCurve: 'P-256',
        },
        false,
        ['sign', 'verify'],
      )) as CryptoKeyPair;
    }

    return this.keyPair;
  }

  private assertBrowserCrypto(): void {
    if (
      !isPlatformBrowser(this.platformId) ||
      !globalThis.isSecureContext ||
      !globalThis.crypto?.subtle
    ) {
      throw new Error(
        'BCPP enrollment requires a secure browser context with Web Crypto.',
      );
    }
  }
}
