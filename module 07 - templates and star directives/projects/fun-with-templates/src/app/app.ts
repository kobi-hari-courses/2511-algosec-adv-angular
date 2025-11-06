import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyIfDirective } from './directives/myIf.directive';
import { StringSelector } from './components/string-selector/string-selector';
import { ItemTemplateDirective } from './components/string-selector/item-template.directive';

@Component({
  selector: 'app-root',
  imports: [ItemTemplateDirective, RouterOutlet, CommonModule, MyIfDirective, StringSelector],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly showHeaders = signal(true);
  readonly showLastColumns = signal(true);

  readonly possibleColors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown'];
  readonly selectedColor = signal(this.possibleColors[0]);

  toggleHeaders() {
    this.showHeaders.update((value) => !value);
  }

  toggleLastColumns() {
    this.showLastColumns.update((value) => !value);
  }
}
