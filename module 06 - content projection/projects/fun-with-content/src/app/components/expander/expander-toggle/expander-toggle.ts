import { Component, inject } from '@angular/core';
import { Expander } from '../expander';

@Component({
  standalone: false,
  selector: 'button[app-expander-toggle]',
  templateUrl: './expander-toggle.html',
  styleUrl: './expander-toggle.scss',
})
export class ExpanderToggle {
  readonly exapnder = inject(Expander, {optional: true});

}
