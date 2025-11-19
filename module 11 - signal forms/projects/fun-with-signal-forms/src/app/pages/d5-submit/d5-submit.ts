import { Component, inject, signal } from '@angular/core';
import { DinnerReview } from '../../model/dinner-review.model';
import { apply, customError, disabled, form, hidden, submit, validateTree } from '@angular/forms/signals';
import { SharedModule } from '../../shared/shared.module';
import { basicDinnerSchema } from '../../model/basic-dinner-schema';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'app-d5-submit',
  imports: [SharedModule],
  templateUrl: './d5-submit.html',
  styleUrl: './d5-submit.scss',
})
export default class D5Submit {
  readonly reviewsService = inject(ReviewsService);

  readonly model = signal<DinnerReview>({
    username: '', 
    food: '', 
    rating: 5, 
    comeBack: true, 
  });

  readonly dinnerForm = form(this.model, x => {
    apply(x, basicDinnerSchema);
    hidden(x.comeBack, ctx => ctx.valueOf(x.rating) < 2);
    disabled(x, ctx => ctx.state.submitting());
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
  });

  async onSubmitForm() {
    const value = this.dinnerForm().value();
    console.log('Submitting review', value);    
    await submit(this.dinnerForm, async (ctx) => {
      console.log('Calling Service');
      const res = await this.reviewsService.submitReview(value);
      console.log('Service returned', res);


      return res.map(pair => customError({
        kind: pair[1], 
        message: pair[1], 
        field: ctx[pair[0]]
      }))
    })
  }

}
