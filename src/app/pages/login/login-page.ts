import { afterNextRender, ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, Injector, signal, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AdminSession } from '../../admin/admin-session';
import { adminErrorText } from '../../admin/admin-error';
import { adminContent, AdminTextKey } from '../../content/admin.data';
import { selectLocalizedText } from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';
import { PageMetadata } from '../../metadata/page-metadata';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: '../message-management/admin-page.scss',
})
export class LoginPage {
  protected readonly session = inject(AdminSession);
  private readonly language = inject(LanguageState);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly metadata = inject(PageMetadata);
  private readonly injector = inject(Injector);
  private readonly feedback = viewChild<ElementRef<HTMLElement>>('feedback');
  protected readonly busy = signal(false);
  protected readonly error = signal('');
  protected readonly query = computed(() => this.language.language() === 'es' ? { lang: 'es' } : {});
  protected readonly form = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email, Validators.maxLength(254)] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(256)] }),
  });
  private readonly metadataEffect = effect(() => this.metadata.update({
    title: this.t('loginTitle'), description: this.t('loginLead'),
    canonicalPath: '/login', language: this.language.language(), robots: 'noindex, nofollow',
  }));

  constructor() {
    if (this.route.snapshot.queryParamMap.get('reason') === 'session-expired') this.error.set(this.t('expired'));
    afterNextRender(() => { void this.session.restore().catch(error => this.fail(error)); });
  }
  protected t(key: AdminTextKey): string {
    return selectLocalizedText(adminContent[key], this.language.language());
  }
  protected async login(): Promise<void> {
    if (this.busy()) return;
    this.error.set('');
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.fail(new Error(this.t('loginFailed')));
      return;
    }
    this.busy.set(true);
    try {
      const { email, password } = this.form.getRawValue();
      await this.session.login(email.trim(), password);
      this.form.controls.password.reset();
      await this.router.navigate(['/admin/messages'], { queryParams: this.query() });
    } catch (error) { this.fail(error); }
    finally { this.form.controls.password.reset(); this.busy.set(false); }
  }
  protected async logout(): Promise<void> {
    this.busy.set(true);
    this.error.set('');
    try { await this.session.logout(); } catch (error) { this.fail(error); }
    finally { this.busy.set(false); }
  }
  private fail(error: unknown): void {
    this.error.set(adminErrorText(error, this.language.language()));
    afterNextRender({ write: () => {
      this.feedback()?.nativeElement.focus({ preventScroll: true });
      this.feedback()?.nativeElement.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    } }, { injector: this.injector });
  }
}
