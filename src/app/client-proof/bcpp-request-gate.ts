import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BcppRequestGate {
  private tail = Promise.resolve();

  enqueue<T>(operation: () => Observable<T>): Observable<T> {
    return new Observable<T>((subscriber) => {
      let cancelled = false;
      let innerSubscription: Subscription | undefined;
      let releaseLease: (() => void) | undefined;

      void this.acquire().then((release) => {
        releaseLease = release;
        if (cancelled) {
          release();
          return;
        }

        innerSubscription = operation().subscribe({
          next: (value) => subscriber.next(value),
          error: (error: unknown) => {
            release();
            subscriber.error(error);
          },
          complete: () => {
            release();
            subscriber.complete();
          },
        });
      });

      return () => {
        cancelled = true;
        innerSubscription?.unsubscribe();
        releaseLease?.();
      };
    });
  }

  private async acquire(): Promise<() => void> {
    const previous = this.tail;
    let releaseCurrent!: () => void;
    const current = new Promise<void>((resolve) => {
      releaseCurrent = resolve;
    });

    this.tail = previous.then(() => current);
    await previous;

    let released = false;
    return () => {
      if (!released) {
        released = true;
        releaseCurrent();
      }
    };
  }
}
