import { Component, signal } from '@angular/core';
import { DinnerReview } from '../../model/dinner-review.model';
import { apply, customError, form, hidden, max, maxLength, min, minLength, required, validate, validateAsync, validateStandardSchema, validateTree } from '@angular/forms/signals';
import { SharedModule } from '../../shared/shared.module';
import { capitalized } from './validators';
import { basicDinnerSchema } from '../../model/basic-dinner-schema';

@Component({
  selector: 'app-d3-advanced-validations',
  imports: [SharedModule],
  templateUrl: './d3-advanced-validations.html',
  styleUrl: './d3-advanced-validations.scss',
})
export default class D3AdvancedValidations {
  readonly myNum = signal(3);


  readonly model = signal<DinnerReview>({
    username: '', 
    food: '', 
    rating: 5, 
    comeBack: true
  });

  readonly dinnerForm = form(this.model, x => {
    apply(x, basicDinnerSchema);
    hidden(x.comeBack, ctx => ctx.valueOf(x.rating) < 2);
    validateTree(x, ctx => {
      const rating = ctx.valueOf(x.rating);
      const comeBack = ctx.valueOf(x.comeBack);

      if ((rating >= 4) && (comeBack === false)) {
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
