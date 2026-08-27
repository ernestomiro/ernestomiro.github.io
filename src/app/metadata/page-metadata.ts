import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LanguageCode } from '../content/portfolio-content.models';

const siteUrl = 'https://ernestomiro.github.io';

export interface PageMetadataDefinition {
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: `/${string}`;
  readonly language: LanguageCode;
}

@Injectable({ providedIn: 'root' })
export class PageMetadata {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  update(metadata: PageMetadataDefinition): void {
    const canonicalUrl = new URL(metadata.canonicalPath, siteUrl).toString();
    const locale = metadata.language === 'es' ? 'es_MX' : 'en_US';
    const alternateLocale = metadata.language === 'es' ? 'en_US' : 'es_MX';

    this.title.setTitle(metadata.title);
    this.meta.updateTag({ name: 'description', content: metadata.description });
    this.meta.updateTag({ property: 'og:title', content: metadata.title });
    this.meta.updateTag({ property: 'og:description', content: metadata.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:locale', content: locale });
    this.meta.updateTag({ property: 'og:locale:alternate', content: alternateLocale });
    this.meta.updateTag({ name: 'twitter:title', content: metadata.title });
    this.meta.updateTag({ name: 'twitter:description', content: metadata.description });
    this.updateCanonical(canonicalUrl);
  }

  private updateCanonical(canonicalUrl: string): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.append(canonical);
    }

    canonical.href = canonicalUrl;
  }
}
