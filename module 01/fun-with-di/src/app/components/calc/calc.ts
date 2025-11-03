import { Component, signal } from '@angular/core';
import { AdditionService } from '../../services/addition-service';

@Component({
  selector: 'app-calc',
  imports: [],
  templateUrl: './calc.html',
  styleUrl: './calc.scss',
  providers: [],
})
export class Calc {
  readonly res = signal(0);
  constructor(protected additionService: AdditionService) {}

  onAdd(a: number, b: number) {
    this.res.set(this.additionService.add(a, b));
  }
}
