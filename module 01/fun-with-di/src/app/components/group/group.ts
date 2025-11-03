import { Component, inject, Inject, Injector, runInInjectionContext } from '@angular/core';
import { Calc } from '../calc/calc';
import { AdditionService } from '../../services/addition-service';
import { HEADER_TOKEN } from '../../tokens/header.token';

@Component({
  selector: 'app-group',
  imports: [Calc],
  templateUrl: './group.html',
  styleUrl: './group.scss',
  providers: [AdditionService],
})
export class Group {
  //constructor(@Inject(HEADER_TOKEN) public myTitle: number){}

  readonly myTitle = inject(HEADER_TOKEN);
  readonly injector = inject(Injector);

  onLater() {
    runInInjectionContext(this.injector, () => {
      const title = inject(HEADER_TOKEN);
      console.log('Title from onLater:', title);
    });
  }
}
