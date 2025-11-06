import { Component, computed, contentChild, input, signal } from '@angular/core';
import { ExpanderToggleDirective } from './app-expander-toggle.directive';

@Component({
  selector: 'app-expander',
  standalone: false,
  templateUrl: './expander.html',
  styleUrl: './expander.scss',
  exportAs: 'expander',
})
export class Expander {
  readonly toggleButton = contentChild(ExpanderToggleDirective);
  readonly customButtonExists = computed(() => !!this.toggleButton());

  readonly isExpanded = signal(false);
  toggle() {
    this.isExpanded.update((value) => !value);
  }

}
