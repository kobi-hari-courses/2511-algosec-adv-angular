import { Component } from '@angular/core';
import { SharedModule } from './shared.module';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ProgressComponent } from "./components/progress/progress.component";
import { DoneComponent } from "./components/done/done.component";
import { BusyComponent } from './components/busy/busy.component';
import { QuestionPresenterComponent } from "./components/question-presenter/question-presenter.component";

@Component({
    selector: 'app-root',
    imports: [SharedModule, QuestionPresenterComponent, ProgressComponent, ToolbarComponent, DoneComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-quiz';
}
