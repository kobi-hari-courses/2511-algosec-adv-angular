import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Expander } from "./components/expander/expander";
import { Blank } from "./components/blank/blank";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Expander, Blank],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fun-with-content');
}
