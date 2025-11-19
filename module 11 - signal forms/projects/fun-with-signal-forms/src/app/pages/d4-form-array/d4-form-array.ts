import { Component, signal } from '@angular/core';
import { DinnerReview, DinnerReviewWithComments } from '../../model/dinner-review.model';
import { apply, applyEach, customError, form, hidden, required, validateTree } from '@angular/forms/signals';
import { SharedModule } from '../../shared/shared.module';
import { basicDinnerSchema } from '../../model/basic-dinner-schema';

@Component({
  selector: 'app-d4-form-array',
  imports: [SharedModule],
  templateUrl: './d4-form-array.html',
  styleUrl: './d4-form-array.scss',
})
export default class D4FormArray {
  readonly model = signal<DinnerReviewWithComments>({
    username: '', 
    food: '', 
    rating: 5, 
    comeBack: true, 
    comments: [
      { comment: 'Great food!', username: 'John Smith' },
      { comment: 'Will come again.', username: 'Jane Doe' }
    ]
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
    applyEach(x.comments, ctx => {
      required(ctx.username, {message: 'Username is required'});
      required(ctx.comment, {message: 'Comment is required'});
    })
  });

  addComment() {
    this.model.update(current => ({
      ...current, 
      comments: [
        ...current.comments, 
        { comment: '', username: '' }
      ]
    }))
  }

}
