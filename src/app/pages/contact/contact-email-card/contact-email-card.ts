import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DirectContactChannel } from '../../../content/portfolio-content.models';

@Component({
  selector: 'app-contact-email-card',
  templateUrl: './contact-email-card.html',
  styleUrl: './contact-email-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactEmailCard {
  readonly email = input.required<DirectContactChannel>();
  readonly title = input.required<string>();
  readonly body = input.required<string>();
  readonly action = input.required<string>();
  readonly accessibleName = input.required<string>();
}
