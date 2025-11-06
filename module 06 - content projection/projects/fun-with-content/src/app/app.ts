import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Expander } from "./components/expander/expander";
import { Blank } from "./components/blank/blank";
import { ExpanderModule } from './components/expander/expander.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExpanderModule, Blank],
  templateUrl: './app.html',
  styleUrl: './app.scss', 
})
export class App {
  protected readonly title = signal('fun-with-content');
}
