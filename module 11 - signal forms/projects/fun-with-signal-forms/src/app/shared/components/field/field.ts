import { Component, computed, contentChild, input } from '@angular/core';
import { Field, FieldTree, MAX, MAX_LENGTH, MIN, MIN_LENGTH } from '@angular/forms/signals';
import { LABEL } from '../../metadata-tokens';

@Component({
  selector: 'app-field',
  imports: [],
  templateUrl: './field.html',
  styleUrl: './field.scss',
})
export class FieldComponent<T> {
  readonly fieldDirective = contentChild.required(Field<T>);

  readonly field = computed(() => this.fieldDirective().field());

  readonly label = computed(() => this.field()().metadata(LABEL)());

  readonly minLength = computed(() => this.field()().metadata(MIN_LENGTH)());
  readonly maxLength = computed(() => this.field()().metadata(MAX_LENGTH)());

  readonly hasLengths = computed(() => 
    (this.minLength() !== undefined) || (this.maxLength() !== undefined)
  );
  readonly lengthHint = computed(() => this.hasLengths() 
    ? `(${this.minLength() ?? '0'} - ${this.maxLength() ?? '∞'} chars)`
    : ''
) 

readonly minValue = computed(() => this.field()().metadata(MIN)());
readonly maxValue = computed(() => this.field()().metadata(MAX)());
readonly hasValues = computed(() => 
  (this.minValue() !== undefined) || (this.maxValue() !== undefined)
);

readonly valueHint = computed(() => this.hasValues() 
  ? `(${this.minValue() ?? '-∞'} - ${this.maxValue() ?? '∞'})`
  : ''
);

}
