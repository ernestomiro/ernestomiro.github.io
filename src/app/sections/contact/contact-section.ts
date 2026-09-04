import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ContactContent,
  LocalizedText,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';

@Component({
  selector: 'app-contact-section',
  imports: [RouterLink],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  private readonly languageState = inject(LanguageState);

  readonly content = input.required<ContactContent>();

  protected readonly contactQueryParams = computed(() =>
    this.languageState.language() === 'es' ? { lang: 'es' } : null,
  );

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
