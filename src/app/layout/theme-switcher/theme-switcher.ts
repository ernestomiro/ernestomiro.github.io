import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import {
  LocalizedText,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';
import {
  supportedThemes,
  ThemeId,
  ThemeState,
} from '../../theme/theme-state';

const themeLabels = {
  group: {
    en: 'Color theme',
    es: 'Tema de color',
  },
  trigger: {
    en: 'Choose color theme',
    es: 'Elegir tema de color',
  },
} as const satisfies Record<string, LocalizedText>;

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcher {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly languageState = inject(LanguageState);
  private readonly themeState = inject(ThemeState);
  private readonly trigger = viewChild.required<ElementRef<HTMLButtonElement>>('trigger');

  readonly idPrefix = input('theme-switcher');

  protected readonly themes = supportedThemes;
  protected readonly panelOpen = signal(false);
  protected readonly currentThemeId = this.themeState.theme;
  protected readonly optionsId = computed(() => this.idPrefix() + '-options');
  protected readonly titleId = computed(() => this.idPrefix() + '-title');
  protected readonly currentTheme = computed(
    () =>
      this.themes.find((theme) => theme.id === this.currentThemeId()) ??
      this.themes[0],
  );
  protected readonly groupLabel = computed(() => this.localize(themeLabels.group));
  protected readonly triggerLabel = computed(
    () =>
      `${this.localize(themeLabels.trigger)}: ${this.localize(
        this.currentTheme().label,
      )}`,
  );

  protected togglePanel(): void {
    this.panelOpen.update((open) => !open);
  }

  protected select(theme: ThemeId): void {
    this.themeState.select(theme);
    this.closePanel(true);
  }

  protected themeLabel(theme: (typeof supportedThemes)[number]): string {
    return this.localize(theme.label);
  }

  private localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }

  private closePanel(restoreFocus = false): void {
    if (!this.panelOpen()) {
      return;
    }

    this.panelOpen.set(false);

    if (restoreFocus) {
      this.trigger().nativeElement.focus();
    }
  }

  @HostListener('document:keydown.escape')
  protected closePanelWithEscape(): void {
    this.closePanel(true);
  }

  @HostListener('document:click', ['$event'])
  protected closePanelFromOutside(event: MouseEvent): void {
    const target = event.target;

    if (
      this.panelOpen() &&
      target instanceof Node &&
      !this.element.nativeElement.contains(target)
    ) {
      this.closePanel();
    }
  }
}
