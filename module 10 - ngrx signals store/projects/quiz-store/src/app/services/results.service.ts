import { Injectable, signal } from "@angular/core";
import { Question } from "../models/question.model";
import { delay, map, of, tap } from "rxjs";

export interface Result {
    readonly questions: Question[];
    readonly answers: number[];
}

@Injectable({providedIn: 'root'})
export class ResultsService {
    #results = signal<Result[]>([]);

    get results() {
        return this.#results.asReadonly();
    }


    saveResults(results: Result) {
        return of(1).pipe(
            tap(_ => console.log('Saving results...', results)),
            delay(2000),
            tap(_ => {
                this.#results.update(current => [...current, results]);
            }), 
            map(_ => this.results().length)
        )
    }
}