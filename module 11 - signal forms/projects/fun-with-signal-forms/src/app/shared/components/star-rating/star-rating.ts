import { Component, computed, effect, input, InputSignal, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss',
  host: {
    '[class.disabled]': 'disabled()'
  }
})
export class StarRating implements FormValueControl<number> {
  readonly value = model.required<number>();
  readonly disabled = input(false);
  readonly max = input<number | undefined>(5);

  readonly actualMax = computed(() => this.max() ?? 5);
  readonly possibleValues = computed(() => Array.from({ length: this.actualMax() }, (_, i) => i + 1));
}
