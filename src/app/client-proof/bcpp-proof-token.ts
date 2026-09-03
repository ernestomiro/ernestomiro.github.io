const canonicalTokenPattern =
  /^(?<id>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\.(?<secret>[A-Za-z0-9_-]{43})\.(?<expires>[0-9]+)$/u;

export interface ParsedBcppProofToken {
  readonly id: string;
  readonly value: string;
  readonly expiresUnixMilliseconds: number;
}

export function parseBcppProofToken(value: string): ParsedBcppProofToken {
  const match = canonicalTokenPattern.exec(value);
  const id = match?.groups?.['id'];
  const expiresText = match?.groups?.['expires'];
  if (!id || !expiresText) {
    throw new Error('The BCPP proof token has an invalid format.');
  }

  const expiresUnixMilliseconds = Number(expiresText);
  if (
    !Number.isSafeInteger(expiresUnixMilliseconds) ||
    expiresUnixMilliseconds <= 0 ||
    expiresUnixMilliseconds.toString() !== expiresText
  ) {
    throw new Error('The BCPP proof token has an invalid expiration.');
  }

  return {
    id,
    value,
    expiresUnixMilliseconds,
  };
}
