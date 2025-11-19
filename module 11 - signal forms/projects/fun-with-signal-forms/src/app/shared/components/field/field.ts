import { Component, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-field',
  imports: [],
  templateUrl: './field.html',
  styleUrl: './field.scss',
})
export class FieldComponent<T> {
  readonly field = input.required<FieldTree<T>>();
  readonly label = input.required<string>();

}
