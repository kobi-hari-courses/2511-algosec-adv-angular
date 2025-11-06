import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-expander',
  imports: [],
  templateUrl: './expander.html',
  styleUrl: './expander.scss',
})
export class Expander {
  readonly header = input('Header');
  readonly content = input('Content');

  readonly isExpanded = signal(true);
  toggle() {
    this.isExpanded.update((value) => !value);
  }

}
