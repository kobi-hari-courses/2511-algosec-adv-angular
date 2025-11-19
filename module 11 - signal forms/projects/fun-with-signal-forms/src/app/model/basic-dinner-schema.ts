import { max, maxLength, min, minLength, required, schema } from '@angular/forms/signals';
import { DinnerReview } from './dinner-review.model';
import { capitalized } from '../shared/validators';

export const basicDinnerSchema = schema<DinnerReview>((x) => {
  required(x.username, {
    message: 'Username is required',
  });
  minLength(x.username, 5, {
    message: 'Username must be at least 5 characters long',
  });
  maxLength(x.username, 15, {
    message: 'Username cannot be longer than 15 characters',
  });
  required(x.food);
  required(x.rating);
  max(x.rating, 10);
  min(x.rating, 1);
  capitalized(x.food);
});
