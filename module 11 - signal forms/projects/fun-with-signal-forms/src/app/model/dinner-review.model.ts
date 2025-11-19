export interface DinnerReview {
    readonly username: string;
    readonly food: string;
    readonly rating: number;
    readonly comeBack: boolean;
}


export interface HasAdress {
    readonly city: string;
    readonly street: string;
    readonly postalCode: string;
}

export interface Person extends HasAdress {
}

export interface Business extends HasAdress {
}