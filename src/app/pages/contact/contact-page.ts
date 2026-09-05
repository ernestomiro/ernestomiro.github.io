import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactMessageClient } from '../../contact/contact-message-client';
import { ContactMessageRequest } from '../../contact/contact-message.models';
import {
  contactFormContent,
  contactFormPath,
} from '../../content/contact-form/contact-form.data';
import { contactContent } from '../../content/portfolio-content.data';
import {
  LocalizedText,
  selectLocalizedText,
} from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';
import { PageMetadata } from '../../metadata/page-metadata';
import { SectionReveal } from '../../motion/section-reveal';
import { ContactEmailCard } from './contact-email-card/contact-email-card';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';
type ContactControlName = 'name' | 'email' | 'phone' | 'message' | 'consent';

const trimmedLength = (minimum: number, maximum: number): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const value = typeof control.value === 'string' ? control.value.trim() : '';

    return value.length >= minimum && value.length <= maximum
      ? null
      : { trimmedLength: true };
  };

const contactMethodRequired: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const email = control.get('email')?.value;
  const phone = control.get('phone')?.value;

  return [email, phone].some(
    (value) => typeof value === 'string' && value.trim().length > 0,
  )
    ? null
    : { contactMethodRequired: true };
};

@Component({
  selector: 'app-contact-page',
  imports: [ContactEmailCard, ReactiveFormsModule, RouterLink, SectionReveal],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  private readonly document = inject(DOCUMENT);
  private readonly languageState = inject(LanguageState);
  private readonly pageMetadata = inject(PageMetadata);
  private readonly contactMessageClient = inject(ContactMessageClient);
  private readonly pageHeading =
    viewChild.required<ElementRef<HTMLHeadingElement>>('pageHeading');
  private readonly errorSummary = viewChild<ElementRef<HTMLElement>>('errorSummary');

  protected readonly content = contactFormContent;
  protected readonly isConfigured = this.contactMessageClient.isConfigured;
  protected readonly submissionState = signal<SubmissionState>('idle');
  protected readonly submitted = signal(false);
  protected readonly homeQueryParams = computed(() =>
    this.languageState.language() === 'es' ? { lang: 'es' } : null,
  );
  protected readonly emailChannel = contactContent.channels.find(
    (channel) => channel.kind === 'email',
  );
  protected readonly form = new FormGroup(
    {
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, trimmedLength(2, 100)],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.email, Validators.maxLength(254)],
      }),
      phone: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.maxLength(32),
          Validators.pattern(/^\+?[0-9\s().-]{7,32}$/),
        ],
      }),
      message: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, trimmedLength(10, 2000)],
      }),
      consent: new FormControl(false, {
        nonNullable: true,
        validators: [Validators.requiredTrue],
      }),
    },
    { validators: contactMethodRequired },
  );

  private readonly metadataEffect = effect(() => {
    const language = this.languageState.language();

    this.pageMetadata.update({
      title: selectLocalizedText(this.content.metadata.title, language),
      description: selectLocalizedText(
        this.content.metadata.description,
        language,
      ),
      canonicalPath: contactFormPath,
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

  protected showControlError(
    controlName: ContactControlName,
  ): boolean {
    const control = this.form.controls[controlName];

    return control.invalid && (control.touched || this.submitted());
  }

  protected showContactError(): boolean {
    return Boolean(
      this.form.errors?.['contactMethodRequired'] && this.submitted(),
    );
  }

  protected submit(): void {
    if (!this.isConfigured || this.submissionState() === 'submitting') {
      return;
    }

    if (this.submissionState() === 'error') {
      this.submissionState.set('idle');
    }

    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.focusErrorSummary();
      return;
    }

    const value = this.form.getRawValue();
    const request: ContactMessageRequest = {
      name: value.name.trim(),
      email: this.trimOrNull(value.email),
      phone: this.trimOrNull(value.phone),
      message: value.message.trim(),
      language: this.languageState.language(),
      consent: true,
    };

    this.submissionState.set('submitting');

    this.contactMessageClient.submit(request).subscribe({
      next: () => {
        this.form.reset();
        this.submitted.set(false);
        this.submissionState.set('success');
      },
      error: () => {
        this.submissionState.set('error');
        this.focusErrorSummary();
      },
    });
  }

  protected startAnotherMessage(): void {
    this.submissionState.set('idle');
    this.submitted.set(false);
  }

  private trimOrNull(value: string): string | null {
    const normalized = value.trim();

    return normalized.length > 0 ? normalized : null;
  }

  private focusErrorSummary(): void {
    this.document.defaultView?.setTimeout(() => {
      this.errorSummary()?.nativeElement.focus({ preventScroll: true });
    });
  }
}
