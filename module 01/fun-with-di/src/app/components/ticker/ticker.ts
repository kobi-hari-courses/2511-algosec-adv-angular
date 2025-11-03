import { Component, DestroyRef, Inject, inject, Injector, OnDestroy, signal } from '@angular/core';
import { createCounterSignal } from '../../utils/counter-signals';
import { interval, take, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-ticker',
  imports: [],
  templateUrl: './ticker.html',
  styleUrl: './ticker.scss',
})
export class Ticker {
  readonly counter = createCounterSignal();
  readonly injector = inject(Injector);

  readonly counter$ = interval(1000).pipe(
    takeUntilDestroyed()
  );

  onLater() {
    const c2 = createCounterSignal(this.injector);
  }

  // readonly counter = signal(0);
  // readonly onDestroy = inject(DestroyRef);

  // constructor() {
  //   const intervalId = setInterval(() => {
  //     this.counter.update((value) => value + 1);
  //     console.log(`Counter updated: ${this.counter()}`);
  //   }, 1000);

  //   this.onDestroy.onDestroy(() => {
  //     clearInterval(intervalId);
  //   });
  // }
}
