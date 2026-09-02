export interface BcppProtectedEchoRequest {
  readonly message: string;
}

export interface BcppProtectedEchoResponse {
  readonly message: string;
  readonly acceptedAtUtc: string;
  readonly protectionStage: 'browser-context-v1';
}

export interface BcppClientCapabilities {
  readonly webCrypto: boolean;
  readonly dedicatedWorker: boolean;
  readonly secureContext: boolean;
}

export interface BcppEnrollmentStartRequest {
  readonly publicKeyJwk: JsonWebKey;
  readonly capabilities: BcppClientCapabilities;
}

export interface BcppEnrollmentChallenge {
  readonly challengeId: string;
  readonly nonce: string;
  readonly publicKeyThumbprint: string;
  readonly challengeProfile: 'sha256-v1';
  readonly expiresAtUtc: string;
}

export interface BcppEnrollmentCompleteRequest {
  readonly challengeId: string;
  readonly nonce: string;
  readonly challengeResult: string;
  readonly signature: string;
}

export interface BcppEnrollmentSession {
  readonly sessionId: string;
  readonly publicKeyThumbprint: string;
  readonly expiresAtUtc: string;
  readonly protectionStage: 'enrollment-v1';
}

export interface BcppChallengeWorkRequest {
  readonly requestId: string;
  readonly challengeId: string;
  readonly nonce: string;
  readonly publicKeyThumbprint: string;
  readonly challengeProfile: 'sha256-v1';
}

export type BcppChallengeWorkResponse =
  | {
      readonly requestId: string;
      readonly result: string;
    }
  | {
      readonly requestId: string;
      readonly error: string;
    };
