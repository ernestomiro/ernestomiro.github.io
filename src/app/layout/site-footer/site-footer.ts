import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FooterContent } from '../../content/portfolio-content.models';
import { ResumeDownload } from '../resume-download/resume-download';

@Component({
  selector: 'app-site-footer',
  imports: [ResumeDownload],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  readonly content = input.required<FooterContent>();

  protected readonly currentYear = new Date().getFullYear();
}
