import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared.module';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DoneComponent } from './components/done/done.component';
import { QuizStore } from './store/quiz.store';

@Component({
  selector: 'app-root',
  imports: [
    SharedModule,
    QuestionPresenterComponent,
    ProgressComponent,
    ToolbarComponent,
    DoneComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly store = inject(QuizStore);
}
