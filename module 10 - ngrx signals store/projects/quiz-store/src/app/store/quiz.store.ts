import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from "@ngrx/signals";
import { initialQuizSlice, QuizSlice } from "./quiz.slice";
import { computed, effect, inject } from "@angular/core";
import { answerCurrentQuestion, resetQuiz, setBusy, setIdle } from "./quiz.updaters";
import { countCorrectAnswers } from "./quiz.helpers";
import { withDevtools } from "@angular-architects/ngrx-toolkit";
import { withSessionStorage } from "../custom-features/with-session-storage";
import { withConditionDevtools } from "../custom-features/with-condition-devtools";
import { ColorQuizGeneratorService } from "../services/color-quiz-generator.service";
import { firstValueFrom } from "rxjs";


export const QuizStore = signalStore(
    { providedIn: 'root' },
    withState(initialQuizSlice), 
    withProps(store => ({
        _generatorService: inject(ColorQuizGeneratorService)
    })), 
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
            patchState(store, answerCurrentQuestion(answerIndex)), 
        createNewQuiz: async () => {
            patchState(store, setBusy());
            const questions = await firstValueFrom(store._generatorService.createRandomQuiz());
            patchState(store, setIdle(), {questions, answers: []});
        }
    })), 
    withConditionDevtools('QuizStore'), 
    withSessionStorage<QuizSlice>('quiz')
    // withHooks(store => ({
    //     onInit: () => {
    //         // Load from session storage
    //         const jsonText = sessionStorage.getItem('quiz');
    //         if (jsonText) {
    //             const state = JSON.parse(jsonText) as QuizSlice;
    //             patchState(store, state);
    //         }

    //         effect(() => {
    //             const state = getState(store);
    //             const jsonText = JSON.stringify(state);
    //             sessionStorage.setItem('quiz', jsonText);
    //         })

    //     }
    // }))
);

