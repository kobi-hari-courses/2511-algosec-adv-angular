import { Directive, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

@Directive({
  selector: '[field]',
  host: {
    '[class.invalid]': 'field()().invalid() && field()().touched()',
  }
})
export class FieldExtensionsDirective<T> {
  readonly field = input.required<FieldTree<T>>();

  constructor() {
    console.log('FieldExtensionsDirective initialized with field:');
  }

}
