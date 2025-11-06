import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-blank',
  imports: [],
  templateUrl: './blank.html',
  styleUrl: './blank.scss',
})
export class Blank {
  readonly bg = input('lightblue');

  constructor() {
        effect(() => {
      console.log('Component bg changed to:', this.bg());
    });

  }

}
