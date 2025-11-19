import { Component, inject, signal } from '@angular/core';
import { DinnerReview } from '../../model/dinner-review.model';
import { apply, customError, form, hidden, submit, validateTree } from '@angular/forms/signals';
import { SharedModule } from '../../shared/shared.module';
import { basicDinnerSchema } from '../../model/basic-dinner-schema';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'app-d6-metadata',
  imports: [SharedModule],
  templateUrl: './d6-metadata.html',
  styleUrl: './d6-metadata.scss',
})
export default class D6Metadata {
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

}
