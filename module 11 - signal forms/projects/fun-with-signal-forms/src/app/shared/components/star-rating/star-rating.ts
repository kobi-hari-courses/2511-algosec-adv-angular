import { Component, input, InputSignal, model } from '@angular/core';
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
}
