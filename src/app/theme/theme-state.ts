import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { LocalizedText } from '../content/portfolio-content.models';

export const supportedThemes = [
  {
    id: 'slate-cream',
    label: {
      en: 'Slate blue & cream',
      es: 'Azul pizarra y crema',
    },
  },
  {
    id: 'white-linen',
    label: {
      en: 'White & linen',
      es: 'Blanco y lino',
    },
  },
  {
    id: 'sage-wood',
    label: {
      en: 'Sage & wood',
      es: 'Verde salvia y madera',
    },
  },
  {
    id: 'taupe-gold',
    label: {
      en: 'Taupe & gold',
      es: 'Taupe y dorado',
    },
  },
  {
    id: 'beige-black',
    label: {
      en: 'Beige & black',
      es: 'Beige y negro',
    },
  },
] as const satisfies readonly {
  id: string;
  label: LocalizedText;
}[];

export type ThemeId = (typeof supportedThemes)[number]['id'];

export const defaultTheme: ThemeId = 'slate-cream';

const themeStorageKey = 'portfolio.theme';

function isThemeId(value: string | null): value is ThemeId {
  return supportedThemes.some((theme) => theme.id === value);
}

@Injectable()
export class ThemeState {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly selectedTheme = signal<ThemeId>(defaultTheme);

  readonly theme = this.selectedTheme.asReadonly();

  constructor() {
    this.applyTheme(this.resolveInitialTheme());
  }

  select(theme: ThemeId): void {
    this.applyTheme(theme);
  }

  private resolveInitialTheme(): ThemeId {
    const browserWindow = this.document.defaultView;

    if (!this.isBrowser || !browserWindow) {
      return defaultTheme;
    }

    try {
      const savedTheme = browserWindow.localStorage.getItem(themeStorageKey);

      return isThemeId(savedTheme) ? savedTheme : defaultTheme;
    } catch {
      return defaultTheme;
    }
  }

  private applyTheme(theme: ThemeId): void {
    this.selectedTheme.set(theme);
    this.document.documentElement.setAttribute('data-theme', theme);
    this.persistTheme(theme);
  }

  private persistTheme(theme: ThemeId): void {
    if (!this.isBrowser) {
      return;
    }

    try {
      this.document.defaultView?.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // The in-memory selection remains usable when storage is unavailable.
    }
  }
}
