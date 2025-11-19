import { Component, signal } from '@angular/core';
import { DinnerReview } from '../../model/dinner-review.model';
import { customError, form, hidden, max, maxLength, min, minLength, required, validate, validateTree } from '@angular/forms/signals';
import { SharedModule } from '../../shared/shared.module';
import { capitalized } from './validators';

@Component({
  selector: 'app-d3-advanced-validations',
  imports: [SharedModule],
  templateUrl: './d3-advanced-validations.html',
  styleUrl: './d3-advanced-validations.scss',
})
export default class D3AdvancedValidations {
  readonly model = signal<DinnerReview>({
    username: '', 
    food: '', 
    rating: 5, 
    comeBack: true
  });

  readonly dinnerForm = form(this.model, x => {
    required(x.username, {
      message: 'Username is required'
    });
    minLength(x.username, 5, {
      message: 'Username must be at least 5 characters long'
    });
    maxLength(x.username, 15, {
      message: 'Username cannot be longer than 15 characters'
    });
    required(x.food);
    required(x.rating);
    max(x.rating, 10);
    min(x.rating, 1);
    capitalized(x.food);
    hidden(x.comeBack, ctx => ctx.valueOf(x.rating) < 5);
    validateTree(x, ctx => {
      const rating = ctx.valueOf(x.rating);
      const comeBack = ctx.valueOf(x.comeBack);

      if ((rating >= 8) && (comeBack === false)) {
        return [
          customError({
            kind: 'come-back-high-rating',
            message: `If rating is ${rating} or higher, comeBack must be true`, 
            field: ctx.fieldTreeOf(x.comeBack)
          }), 
          customError({
            kind: 'come-back-high-rating',
            message: `If rating is ${rating}, comeBack must be true`, 
            field: ctx.fieldTreeOf(x.rating)
          })
        ]
      }

      return undefined;

    });
    // validate(x.food, x => {
    //   // check if the first letter is uppercase
    //   const value = x.value();
    //   if (value.length === 0) {
    //     return undefined;
    //   }
    //   const firstLetter = value.charAt(0);
    //   if (firstLetter === firstLetter.toUpperCase()) {
    //     return undefined;
    //   }

    //   return customError({
    //     kind: 'first-letter-uppercase',
    //     message: 'The first letter must be uppercase'
    //   })

    // })
  });

}
