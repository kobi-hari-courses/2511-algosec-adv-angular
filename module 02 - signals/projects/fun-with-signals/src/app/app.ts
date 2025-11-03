import { Component, computed, effect, inject, Injector, linkedSignal, signal, untracked } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkedDemo } from "./components/linked-demo/linked-demo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkedDemo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly injector = inject(Injector);
  readonly a = signal(10);
  readonly b = signal(32);

  readonly sum = computed(() => this.a() + this.b());

  readonly total = linkedSignal(() => this.a() + this.b());

  waitABit() {
    return new Promise<void>(res => {
      setTimeout(() => res(), 2000);
    })
  }

  constructor() {
    effect(async () => {
      console.log('Running the effect');
      await this.waitABit();
      console.log('After waiting a bit');
      if (this.a() > 15) {
        console.log(`a = ${this.a()}, which is greater than 15`);
        console.log(`b = ${this.b()}`);
      }
    });

    effect(() => {
      const b = this.b();
      untracked(() => {
        console.log(`The sum is now ${this.sum()}`);
      })
    })
  }

  incrementA() {
    this.a.update(value => value + 1);
  }
  incrementB() {
    this.b.update(value => value + 1);
  }

  incrementBoth() {
    this.a.update(value => value + 1);
    this.b.update(value => value + 1);
  }

  setTotalToValue() {
    this.total.set(100);
  }

}
