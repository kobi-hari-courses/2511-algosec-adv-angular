import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Highlight } from './directives/highlight';
import { Blank } from "./components/blank/blank";
import { ImageHelper } from './directives/image-helper';
import { CrazyButton } from './components/crazy-button/crazy-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Highlight, Blank, ImageHelper, CrazyButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fun-with-directives');

  onTimePassed() {
    console.log('5 seconds have passed - event received in App component');
  }
}
