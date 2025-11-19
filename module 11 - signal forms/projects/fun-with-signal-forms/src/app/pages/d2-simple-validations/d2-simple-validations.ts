import { Component, signal } from '@angular/core';
import { DinnerReview } from '../../model/dinner-review.model';
import { form, max, maxLength, min, minLength, required } from '@angular/forms/signals';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-d2-simple-validations',
  imports: [SharedModule],
  templateUrl: './d2-simple-validations.html',
  styleUrl: './d2-simple-validations.scss',
})
export default class D2SimpleValidations {
  readonly model = signal<DinnerReview>({
    username: '', 
    food: '', 
    rating: 5, 
    comeBack: true
  });

  readonly dinnerForm = form(this.model, x => {
    required(x.username);
    minLength(x.username, 5);
    maxLength(x.username, 15);
    required(x.food);
    required(x.rating);
    max(x.rating, 10);
    min(x.rating, 1);
  });

}
