import { DOCUMENT } from '@angular/common';
import {
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {
  provideRouter,
  Router,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
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
      withViewTransitions({
        skipInitialTransition: true,
        onViewTransitionCreated: ({ transition }) => {
          const router = inject(Router);
          const browserWindow = inject(DOCUMENT).defaultView;
          const targetUrl = router.currentNavigation()?.finalUrl;
          const sameRoute =
            targetUrl &&
            router.isActive(targetUrl, {
              paths: 'exact',
              matrixParams: 'exact',
              queryParams: 'ignored',
              fragment: 'ignored',
            });

          // Preserve in-page navigation and the user's motion preference.
          if (
            sameRoute ||
            browserWindow?.matchMedia('(prefers-reduced-motion: reduce)').matches
          ) {
            transition.skipTransition();
          }
        },
      }),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
  ],
};
