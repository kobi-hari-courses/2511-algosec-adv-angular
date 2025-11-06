import { CommonModule } from '@angular/common';
import { Component, contentChild, input, model, TemplateRef } from '@angular/core';
import { ItemTemplateDirective } from './item-template.directive';

@Component({
  selector: 'app-string-selector',
  imports: [CommonModule],
  templateUrl: './string-selector.html',
  styleUrl: './string-selector.scss',
})
export class StringSelector {
  readonly options = input.required<string[]>();

  readonly selectedOption = model('');

  readonly itemTemplateDirective = contentChild(ItemTemplateDirective);

}
