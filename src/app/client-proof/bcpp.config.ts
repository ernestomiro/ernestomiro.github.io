import { InjectionToken } from '@angular/core';

export interface BcppConfig {
  readonly enabled: boolean;
  readonly apiBaseUrl: string;
  readonly protectedPrefixes?: readonly string[];
  readonly protectedPaths: readonly string[];
}

export const BCPP_CONFIG = new InjectionToken<BcppConfig>('BCPP_CONFIG');
