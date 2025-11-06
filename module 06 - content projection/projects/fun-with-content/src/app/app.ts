import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Expander } from "./components/expander/expander";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Expander],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fun-with-content');
}
