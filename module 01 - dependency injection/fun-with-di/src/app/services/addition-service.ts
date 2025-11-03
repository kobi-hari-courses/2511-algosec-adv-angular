import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdditionService {
  readonly id = Math.floor(Math.random() * 1000000);

  constructor() {
    console.log(`AdditionService instance created with id: ${this.id}`);
  }

  add(a: number, b: number): number {
    return a + b;
  }
  
}
