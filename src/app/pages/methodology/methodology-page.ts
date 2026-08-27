import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  methodologyContent,
  methodologyPath,
} from '../../content/methodology/methodology.data';
import {
  LocalizedText,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';
import { PageMetadata } from '../../metadata/page-metadata';

@Component({
  selector: 'app-methodology-page',
  imports: [RouterLink],
  templateUrl: './methodology-page.html',
  styleUrl: './methodology-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodologyPage {
  private readonly document = inject(DOCUMENT);
  private readonly languageState = inject(LanguageState);
  private readonly pageMetadata = inject(PageMetadata);
  private readonly pageHeading =
    viewChild.required<ElementRef<HTMLHeadingElement>>('pageHeading');

  protected readonly content = methodologyContent;
  protected readonly homeQueryParams = computed(() =>
    this.languageState.language() === 'es' ? { lang: 'es' } : null,
  );

  private readonly metadataEffect = effect(() => {
    const language = this.languageState.language();

    this.pageMetadata.update({
      title: selectLocalizedText(this.content.metadata.title, language),
      description: selectLocalizedText(this.content.metadata.description, language),
      canonicalPath: methodologyPath,
      language,
    });
  });

  constructor() {
    afterNextRender(() => {
      this.document.defaultView?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      this.pageHeading().nativeElement.focus({ preventScroll: true });
    });
  }

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}

