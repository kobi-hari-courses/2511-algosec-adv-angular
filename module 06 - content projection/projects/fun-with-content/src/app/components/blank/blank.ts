import { Component, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-blank',
  imports: [],
  templateUrl: './blank.html',
  styleUrl: './blank.scss',
})
export class Blank {
  readonly destroyRef = inject(DestroyRef);
  readonly id = Math.random().toString(36).substring(2, 9);

  constructor() {
    console.log('Blank component created');

    this.destroyRef.onDestroy(() => {
      console.log('Blank component destroyed');
    });
  }
}
