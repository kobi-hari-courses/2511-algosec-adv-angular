import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-demo',
  imports: [],
  templateUrl: './linked-demo.html',
  styleUrl: './linked-demo.scss',
})
export class LinkedDemo {
  readonly options = signal([
    'red', 
    'green', 
    'blue', 
    'yellow', 
    'purple'
  ]);

  readonly selectedOption = linkedSignal<string[], string>({
    source: this.options,
    computation: (newSource, previous) => {
      if (!previous) {
        return newSource[0] || '';
      }

      if (newSource.includes(previous.value)) {
        return previous.value;
      }

      return newSource[0] || '';
    }
  })

  changeSelected(value: string) {
    if (this.options().includes(value)) {
      this.selectedOption.set(value);
    }
  }

  removeLastOption() {
    this.options.update(options => options.slice(0, -1));
  }


}
