import { Component, signal } from '@angular/core';
import { DinnerReview } from '../../model/dinner-review.model';
import { form } from '@angular/forms/signals';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-d1-simple-form',
  imports: [SharedModule],
  templateUrl: './d1-simple-form.html',
  styleUrl: './d1-simple-form.scss',
})
export default class D1SimpleForm {
  readonly model = signal<DinnerReview>({
    username: 'kobi', 
    food: 'Pizza', 
    rating: 5, 
    comeBack: true
  });

  readonly dinnerForm = form(this.model);

}
