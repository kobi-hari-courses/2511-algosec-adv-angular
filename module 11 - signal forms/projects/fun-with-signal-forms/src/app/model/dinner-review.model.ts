export interface DinnerReview {
    readonly username: string;
    readonly food: string;
    readonly rating: number;
    readonly comeBack: boolean;
}

export interface DinnerReviewWithComments extends DinnerReview {
    readonly comments: DinnerComment[];
}

export interface DinnerComment {
    readonly comment: string;
    readonly username: string;
}