import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-expander',
  standalone: false,
  templateUrl: './expander.html',
  styleUrl: './expander.scss',
})
export class Expander {
  readonly isExpanded = signal(false);
  toggle() {
    this.isExpanded.update((value) => !value);
  }

}
