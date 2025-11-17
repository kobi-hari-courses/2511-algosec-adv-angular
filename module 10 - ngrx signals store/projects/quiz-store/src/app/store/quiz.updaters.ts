import { PartialStateUpdater } from "@ngrx/signals";
import { initialQuizSlice, QuizSlice } from "./quiz.slice";

export function resetQuiz(): PartialStateUpdater<QuizSlice> {
    return _ => ({answers: []});
}

export function answerCurrentQuestion(answerIndex: number): PartialStateUpdater<QuizSlice> {
    return state => ({       
        answers: [...state.answers, answerIndex]
    })
}

export function setBusy(): PartialStateUpdater<QuizSlice> {
    return _ => ({isBusy: true})
}

export function setIdle(): PartialStateUpdater<QuizSlice> {
    return _ => ({isBusy: false})
}   