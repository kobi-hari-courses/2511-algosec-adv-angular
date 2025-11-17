import { Question } from "../models/question.model";

export function countCorrectAnswers(questions: Question[], answers: number[]): number {
    // Count how many answers are correct without using reduce...
    let correctCount = 0;
    for (let i = 0; i < answers.length; i++) {
        if (questions[i].correctIndex === answers[i]) {
            correctCount++;
        }
    }
    return correctCount;
}