import { Injectable } from "@angular/core";
import { DinnerReview } from "../model/dinner-review.model";

@Injectable({providedIn: 'root'})
export class ReviewsService {
    waitALittle(): Promise<void> {
        return new Promise((resolve) => setTimeout(() => resolve(), 5000));
    }

    async submitReview(review: DinnerReview): Promise<[keyof DinnerReview , string][]> {
        await this.waitALittle();
        return [
            ['username', 'Username is already taken'],
            ['food', 'There is no such food item in the menu'], 
            ['username', 'Username cannot contain special characters']
        ]
    }
}