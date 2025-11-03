import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calc } from "./components/calc/calc";
import { Group } from "./components/group/group";
import { HEADER_TOKEN } from './tokens/header.token';
import { Ticker } from "./components/ticker/ticker";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calc, Group, Ticker],
  templateUrl: './app.html',
  styleUrl: './app.scss', 
  providers: [
  ]
})
export class App {
  readonly showTicker = signal(false);
  toggleTicker() {
    this.showTicker.update(v => !v);
  }

  protected readonly title = signal('fun-with-di');
}
