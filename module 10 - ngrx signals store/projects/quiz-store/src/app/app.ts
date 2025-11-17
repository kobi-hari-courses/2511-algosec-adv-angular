import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared.module';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DoneComponent } from './components/done/done.component';
import { QuizStore } from './store/quiz.store';
import { BusyComponent } from "./components/busy/busy.component";

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
}
