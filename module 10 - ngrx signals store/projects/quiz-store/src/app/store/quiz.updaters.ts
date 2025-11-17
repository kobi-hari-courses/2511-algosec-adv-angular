import { PartialStateUpdater } from "@ngrx/signals";
import { initialQuizSlice, QuizSlice } from "./quiz.slice";

export function resetQuiz(): PartialStateUpdater<QuizSlice> {
    return _ => initialQuizSlice;
}

export function answerCurrentQuestion(answerIndex: number): PartialStateUpdater<QuizSlice> {
    return state => ({       
        answers: [...state.answers, answerIndex]
    })
}