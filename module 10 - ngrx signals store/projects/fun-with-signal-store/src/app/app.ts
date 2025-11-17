import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValuesStore } from './store/values.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss', 
  providers: [ValuesStore],
})
export class App {
  readonly store = inject(ValuesStore);
}

