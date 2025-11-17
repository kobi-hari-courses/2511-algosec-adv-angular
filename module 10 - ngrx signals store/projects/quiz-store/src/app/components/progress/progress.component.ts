import { Component, computed, inject, Input, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { QuizStore } from '../../store/quiz.store';

@Component({
    selector: 'app-progress',
    imports: [SharedModule],
    templateUrl: './progress.component.html',
    styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  readonly store = inject(QuizStore);

  readonly value = this.store.currentQuestionIndex;
  readonly max = this.store.questionsCount;

  readonly ratio = computed(() => this.value() / this.max());

}
