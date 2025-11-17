import { Injectable } from "@angular/core";
import { Observable, delay, map, of, switchMap, tap, throwError } from "rxjs";
import { Question } from "../models/question.model";
import { randomColorQuiz } from "./helpers";

@Injectable({providedIn: 'root'})
export class ColorQuizGeneratorService {
    createRandomQuiz(): Observable<Question[]> {
        return of(1).pipe(
            tap(_ => console.log('Generating new quiz...')),
            map(_ => randomColorQuiz()), 
            delay(4000), 
            switchMap(res => Math.random() < 0.66 ? of(res) : throwError(() => 'Basa')), // 20% chance to simulate failure
            tap(_ => console.log('Quiz generated.'))
        );        
    }    
}