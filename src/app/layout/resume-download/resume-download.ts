import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import {
  LocalizedText,
  ResumeContent,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';

export type ResumeDownloadPlacement = 'above' | 'below' | 'inline';

@Component({
  selector: 'app-resume-download',
  templateUrl: './resume-download.html',
  styleUrl: './resume-download.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeDownload {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly languageState = inject(LanguageState);
  private readonly details =
    viewChild.required<ElementRef<HTMLDetailsElement>>('details');
  private readonly trigger =
    viewChild.required<ElementRef<HTMLElement>>('trigger');

  readonly content = input.required<ResumeContent>();
  readonly placement = input<ResumeDownloadPlacement>('below');
  readonly optionSelected = output<void>();

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }

  protected closeAfterSelection(): void {
    this.details().nativeElement.open = false;
    this.optionSelected.emit();
  }

  protected closeFromEscape(event: Event): void {
    if (!this.details().nativeElement.open) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.details().nativeElement.open = false;
    this.trigger().nativeElement.focus();
  }

  @HostListener('document:click', ['$event'])
  protected closeFromOutside(event: MouseEvent): void {
    const target = event.target;

    if (
      this.details().nativeElement.open &&
      target instanceof Node &&
      !this.host.nativeElement.contains(target)
    ) {
      this.details().nativeElement.open = false;
    }
  }
}
