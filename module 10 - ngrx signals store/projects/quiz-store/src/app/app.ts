import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared.module';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DoneComponent } from './components/done/done.component';
import { QuizStore } from './store/quiz.store';
import { BusyComponent } from "./components/busy/busy.component";
import { Result, ResultsService } from './services/results.service';
import { rxMutation, switchOp } from '@angular-architects/ngrx-toolkit';

@Component({
  selector: 'app-root',
  imports: [
    SharedModule,
    QuestionPresenterComponent,
    ProgressComponent,
    ToolbarComponent,
    DoneComponent,
    BusyComponent
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly store = inject(QuizStore);

  constructor() {
  }

  readonly resultsService = inject(ResultsService);
  readonly resultsMutation = rxMutation({
    operation: (result: Result) => this.resultsService.saveResults(result), 
    onSuccess: res => {
      console.log('Results saved successfully', res);
    }, 
    onError: err => {
      console.error('Error saving results', err);
    }, 
    operator: switchOp
  });

  onSaveResults() {
    const resultRecord: Result = {
      questions: this.store.questions(), 
      answers: this.store.answers(),
    }

    this.resultsMutation(resultRecord);
  }
}
