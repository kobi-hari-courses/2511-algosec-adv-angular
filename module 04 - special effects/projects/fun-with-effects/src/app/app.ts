import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Fun } from "./components/fun/fun";
import { Dummy } from "./components/dummy/dummy";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Fun, Dummy],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fun-with-effects');
}
