export interface BcppProtectedEchoRequest {
  readonly message: string;
}

export interface BcppProtectedEchoResponse {
  readonly message: string;
  readonly acceptedAtUtc: string;
  readonly protectionStage: 'browser-context-v1';
}
