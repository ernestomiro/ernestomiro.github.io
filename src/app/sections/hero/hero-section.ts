import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { HeroContent, LocalizedText, selectLocalizedText } from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';
import { InterfaceSlide, InterfaceSlideshow } from '../../interface-slideshow/interface-slideshow';

@Component({
  selector: 'app-hero-section',
  imports: [InterfaceSlideshow],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  private readonly languageState = inject(LanguageState);

  readonly content = input.required<HeroContent>();
  readonly slides = input<readonly InterfaceSlide[]>([]);

  protected readonly interfaceLabel: LocalizedText = {
    en: 'Project interface examples',
    es: 'Ejemplos de interfaces de proyectos',
  };

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
