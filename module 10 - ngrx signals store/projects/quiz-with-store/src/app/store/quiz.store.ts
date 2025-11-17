import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { initialQuizSlice } from "./quiz.slice";
import { computed } from "@angular/core";
import { answerCurrentQuestion, resetQuiz } from "./quiz.updaters";
import { countCorrectAnswers } from "./quiz.helpers";
import { withDevtools } from "@angular-architects/ngrx-toolkit";
import { ENV } from "./environment";


export const QuizStore = signalStore(
    { providedIn: 'root' },
    withState(initialQuizSlice), 
    withComputed(store => {
        const currentQuestionIndex = computed(() => store.answers().length);
        const currentQuestion = computed(() => store.questions()[currentQuestionIndex()]);
        const questionsCount = computed(() => store.questions().length);
        const isDone = computed(() => questionsCount() === currentQuestionIndex());
        const correctCount = computed(() => countCorrectAnswers(store.questions(), store.answers()));

        return {
            currentQuestionIndex,
            currentQuestion, 
            questionsCount,    
            isDone, 
            correctCount    
        }
    }) , 
    withMethods(store => ({
        resetQuiz: () => patchState(store, resetQuiz()), 
        answerCurrentQuestion: (answerIndex: number) => 
            patchState(store, answerCurrentQuestion(answerIndex))
    })), 
    withDevtools('QuizStore')
);

