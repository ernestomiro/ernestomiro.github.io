import { DatePipe } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, Injector, signal, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminMessageClient, ManagedMessage, MessagePage, MessageStatus } from '../../admin/admin-message-client';
import { AdminSession } from '../../admin/admin-session';
import { adminErrorText } from '../../admin/admin-error';
import { adminContent, AdminTextKey } from '../../content/admin.data';
import { selectLocalizedText } from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';
import { PageMetadata } from '../../metadata/page-metadata';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-message-management',
  imports: [DatePipe, ReactiveFormsModule, RouterLink],
  templateUrl: './message-management.html',
  styleUrl: './admin-page.scss',
})
export class MessageManagement {
  private readonly client = inject(AdminMessageClient);
  private readonly session = inject(AdminSession);
  private readonly language = inject(LanguageState);
  private readonly router = inject(Router);
  private readonly metadata = inject(PageMetadata);
  private readonly injector = inject(Injector);
  private readonly feedback = viewChild<ElementRef<HTMLElement>>('feedback');
  private readonly detailHeading = viewChild<ElementRef<HTMLElement>>('detailHeading');
  protected readonly query = computed(() => this.language.language() === 'es' ? { lang: 'es' } : {});
  protected readonly result = signal<MessagePage | null>(null);
  protected readonly page = signal(1);
  protected readonly filter = signal<MessageStatus | ''>('');
  protected readonly selected = signal<ManagedMessage | null>(null);
  protected readonly editing = signal(false);
  protected readonly deleting = signal(false);
  protected readonly busy = signal(false);
  protected readonly error = signal('');
  protected readonly notice = signal('');
  protected readonly pages = computed(() => Math.max(1, Math.ceil((this.result()?.total ?? 0) / 20)));
  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.email, Validators.maxLength(254)] }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.maxLength(32), Validators.pattern(/^\+?[0-9\s().-]{7,32}$/)] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10), Validators.maxLength(2000)] }),
    language: new FormControl<'en' | 'es'>('es', { nonNullable: true }),
    status: new FormControl<MessageStatus>('New', { nonNullable: true }),
    consent: new FormControl(false, { nonNullable: true, validators: Validators.requiredTrue }),
  });
  private readonly metadataEffect = effect(() => this.metadata.update({
    title: this.t('messagesTitle'), description: this.t('messagesLead'),
    canonicalPath: '/admin/messages', language: this.language.language(), robots: 'noindex, nofollow',
  }));
  private readonly sessionEffect = effect(() => {
    if (this.session.initialized() && !this.session.user()) {
      this.result.set(null);
      this.selected.set(null);
      this.form.reset();
      this.editing.set(false); this.deleting.set(false);
      if (this.session.expired()) void this.router.navigate(['/login'], { queryParams: { ...this.query(), reason: 'session-expired' }, replaceUrl: true });
    }
  });

  constructor() { afterNextRender(() => { void this.reload(); }); }
  protected t(key: AdminTextKey): string { return selectLocalizedText(adminContent[key], this.language.language()); }
  protected async reload(): Promise<void> { await this.run(() => this.refreshList()); }
  protected async changeFilter(event: Event): Promise<void> {
    this.filter.set((event.target as HTMLSelectElement).value as MessageStatus | '');
    this.page.set(1);
    await this.reload();
  }
  protected async changePage(change: number): Promise<void> {
    this.page.set(Math.max(1, Math.min(this.pages(), this.page() + change)));
    await this.reload();
  }
  protected async open(id: string): Promise<void> {
    await this.run(async () => {
      this.selected.set(await this.client.get(id));
      this.editing.set(false); this.deleting.set(false);
      this.focusDetail();
    });
  }
  protected create(): void {
    this.selected.set(null); this.editing.set(true); this.deleting.set(false);
    this.error.set(''); this.notice.set('');
    this.form.reset({ language: this.language.language(), status: 'New', consent: false });
    this.focusDetail();
  }
  protected edit(): void {
    const item = this.selected();
    if (!item) return;
    this.form.reset({ name: item.name, email: item.email ?? '', phone: item.phone ?? '',
      message: item.message, language: item.language, status: item.status, consent: true });
    this.editing.set(true); this.deleting.set(false); this.error.set('');
    this.focusDetail();
  }
  protected close(): void {
    this.selected.set(null); this.editing.set(false); this.deleting.set(false);
    this.form.reset(); this.error.set('');
  }
  protected async save(): Promise<void> {
    const value = this.form.getRawValue();
    if (this.form.invalid || value.name.trim().length < 2 || value.message.trim().length < 10
      || (!value.email.trim() && !value.phone.trim())) {
      this.form.markAllAsTouched();
      this.error.set(this.t('invalid'));
      this.focusFeedback();
      return;
    }
    await this.run(async () => {
      const item = await this.client.save({
        name: value.name.trim(), email: value.email.trim() || null, phone: value.phone.trim() || null,
        message: value.message.trim(), language: value.language, consent: true,
      }, value.status, this.selected());
      this.selected.set(item); this.editing.set(false);
      this.notice.set(this.t('saved')); await this.refreshList();
    });
  }
  protected async toggleRead(): Promise<void> {
    const item = this.selected();
    if (!item) return;
    await this.run(async () => {
      this.selected.set(await this.client.setStatus(item, item.status === 'Read' ? 'New' : 'Read'));
      this.notice.set(this.t('statusSaved')); await this.refreshList();
    });
  }
  protected async remove(): Promise<void> {
    const item = this.selected();
    if (!item || !this.deleting()) return;
    await this.run(async () => {
      await this.client.delete(item);
      this.close(); this.notice.set(this.t('deleted')); await this.refreshList();
    });
  }
  private async refreshList(): Promise<void> {
    let data = await this.client.list(this.page(), this.filter());
    if (!data.items.length && this.page() > 1) {
      this.page.set(Math.max(1, Math.ceil(data.total / data.pageSize)));
      data = await this.client.list(this.page(), this.filter());
    }
    if (this.session.user()) this.result.set(data);
  }
  private async run(operation: () => Promise<void>): Promise<void> {
    if (this.busy()) return;
    this.busy.set(true); this.error.set(''); this.notice.set('');
    try { await operation(); }
    catch (error) { this.error.set(adminErrorText(error, this.language.language())); this.focusFeedback(); }
    finally { this.busy.set(false); }
  }
  private focusFeedback(): void {
    afterNextRender({ write: () => {
      this.feedback()?.nativeElement.focus({ preventScroll: true });
      this.feedback()?.nativeElement.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    } }, { injector: this.injector });
  }
  private focusDetail(): void {
    afterNextRender({ write: () => {
      this.detailHeading()?.nativeElement.focus({ preventScroll: true });
      this.detailHeading()?.nativeElement.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    } }, { injector: this.injector });
  }
}
