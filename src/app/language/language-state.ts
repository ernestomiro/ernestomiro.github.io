import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import {
  defaultLanguage,
  isLanguageCode,
  LanguageCode,
} from '../content/portfolio-content.models';

const languageQueryParameter = 'lang';
const languageStorageKey = 'portfolio.language';

@Injectable()
export class LanguageState {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly selectedLanguage = signal<LanguageCode>(defaultLanguage);

  readonly language = this.selectedLanguage.asReadonly();

  constructor() {
    const initialLanguage = this.resolveInitialLanguage();

    this.applyLanguage(initialLanguage);
  }

  select(language: LanguageCode): void {
    this.applyLanguage(language);
  }

  private resolveInitialLanguage(): LanguageCode {
    const browserWindow = this.document.defaultView;

    if (!this.isBrowser || !browserWindow) {
      return defaultLanguage;
    }

    const requestedLanguage = new URL(browserWindow.location.href).searchParams.get(
      languageQueryParameter,
    );

    if (isLanguageCode(requestedLanguage)) {
      return requestedLanguage;
    }

    try {
      const savedLanguage = browserWindow.localStorage.getItem(languageStorageKey);

      return isLanguageCode(savedLanguage) ? savedLanguage : defaultLanguage;
    } catch {
      return defaultLanguage;
    }
  }

  private applyLanguage(language: LanguageCode): void {
    this.selectedLanguage.set(language);
    this.document.documentElement.lang = language;
    this.persistLanguage(language);
    this.replaceLanguageInUrl(language);
  }

  private persistLanguage(language: LanguageCode): void {
    if (!this.isBrowser) {
      return;
    }

    try {
      this.document.defaultView?.localStorage.setItem(languageStorageKey, language);
    } catch {
      // The in-memory selection remains usable when storage is unavailable.
    }
  }

  private replaceLanguageInUrl(language: LanguageCode): void {
    const browserWindow = this.document.defaultView;

    if (!this.isBrowser || !browserWindow) {
      return;
    }

    const url = new URL(browserWindow.location.href);

    if (language === defaultLanguage) {
      url.searchParams.delete(languageQueryParameter);
    } else {
      url.searchParams.set(languageQueryParameter, language);
    }

    const relativeUrl = `${url.pathname}${url.search}${url.hash}`;
    browserWindow.history.replaceState(browserWindow.history.state, '', relativeUrl);
  }
}
