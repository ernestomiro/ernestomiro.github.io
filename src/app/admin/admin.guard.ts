import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LanguageState } from '../language/language-state';
import { AdminSession } from './admin-session';

export const adminGuard: CanActivateFn = async () => {
  const session = inject(AdminSession);
  const router = inject(Router);
  const language = inject(LanguageState);
  if (!isPlatformBrowser(inject(PLATFORM_ID))) return false;
  try { await session.restore(); } catch { /* The login page can show/retry connection errors. */ }
  return session.user() ? true : router.createUrlTree(['/login'], {
    queryParams: language.language() === 'es' ? { lang: 'es' } : {},
  });
};
