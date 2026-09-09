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
  aiApplicationsContent,
  aiApplicationsPath,
} from '../../content/ai-applications.data';
import {
  LocalizedText,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';
import { PageMetadata } from '../../metadata/page-metadata';
import { SectionReveal } from '../../motion/section-reveal';

@Component({
  selector: 'app-ai-applications-page',
  imports: [RouterLink, SectionReveal],
  templateUrl: './ai-applications-page.html',
  styleUrl: './ai-applications-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiApplicationsPage {
  private readonly document = inject(DOCUMENT);
  private readonly languageState = inject(LanguageState);
  private readonly pageMetadata = inject(PageMetadata);
  private readonly pageHeading =
    viewChild.required<ElementRef<HTMLHeadingElement>>('pageHeading');

  protected readonly content = aiApplicationsContent;
  protected readonly homeQueryParams = computed(() =>
    this.languageState.language() === 'es' ? { lang: 'es' } : null,
  );

  private readonly metadataEffect = effect(() => {
    const language = this.languageState.language();

    this.pageMetadata.update({
      title: selectLocalizedText(this.content.metadata.title, language),
      description: selectLocalizedText(this.content.metadata.description, language),
      canonicalPath: aiApplicationsPath,
      language,
    });
  });

  constructor() {
    afterNextRender({
      write: () => {
        this.document.defaultView?.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      },
    });
  }

  protected focusPageHeading(): void {
    this.pageHeading().nativeElement.focus({ preventScroll: true });
  }

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
