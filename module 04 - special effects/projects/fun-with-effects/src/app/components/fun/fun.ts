import { afterEveryRender, afterNextRender, Component, contentChildren, effect, ElementRef, input, signal } from '@angular/core';
import { Dummy } from '../dummy/dummy';

@Component({
  selector: 'app-fun',
  imports: [],
  templateUrl: './fun.html',
  styleUrl: './fun.scss',
  host: {
    '[class.show-class]': 'showClass()',
    '(click)': 'onClick()'
  }
})
export class Fun {
  readonly showClass = signal(true);
  readonly title = input.required<string>();
  readonly myContent = contentChildren(Dummy);

  onClick() {
    console.log('clicked!');
    console.log(this.myContent());
  }

  constructor() {
    effect(() => {
    });

    afterEveryRender({
      read: () => {

      }, 
      write: () => {

      }
    });

    afterNextRender(() => {
      console.log(`the title is: `, this.title());
      console.log(this.myContent());
    })
  }
}
