import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { BCPP_CONFIG } from './client-proof/bcpp.config';
import { bcppRequestInterceptor } from './client-proof/bcpp-request.interceptor';
import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withFetch(),
      withInterceptors([bcppRequestInterceptor]),
    ),
    provideClientHydration(withEventReplay()),
    {
      provide: BCPP_CONFIG,
      useValue: environment.bcpp,
    },
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
  ],
};
