import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-expander',
  imports: [],
  templateUrl: './expander.html',
  styleUrl: './expander.scss',
})
export class Expander {
  readonly isExpanded = signal(false);
  toggle() {
    this.isExpanded.update((value) => !value);
  }

}
