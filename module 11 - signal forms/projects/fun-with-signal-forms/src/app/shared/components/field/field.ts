import { Component, computed, contentChild, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-field',
  imports: [],
  templateUrl: './field.html',
  styleUrl: './field.scss',
})
export class FieldComponent<T> {
  readonly fieldDirective = contentChild.required(Field<T>);

  readonly field = computed(() => this.fieldDirective().field());

  readonly label = input.required<string>();

}
