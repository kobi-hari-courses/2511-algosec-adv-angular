import {
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  linkedSignal,
  output,
  Renderer2,
  signal,
} from '@angular/core';

@Directive({
  selector: '.x',
  host: {
    '[style.backgroundColor]': 'effectiveBg()',
  },
})
export class Highlight {
  readonly elem = inject(ElementRef) as ElementRef<HTMLElement>;
  readonly renderer = inject(Renderer2);

  readonly bg = input('yellow');

  readonly effectiveBg = linkedSignal(() => this.bg());

  readonly timePassed = output<void>();

  constructor() {
    console.log('Highlight directive initialized');
    // this.elem.nativeElement.style.backgroundColor = 'yellow';
    // this.renderer.setStyle(this.elem.nativeElement, 'backgroundColor', 'pink');

    effect(() => {
      console.log('Directive bg changed to:', this.bg());
    });

    setTimeout(() => {
      this.effectiveBg.set('');
      this.timePassed.emit();
    }, 50000);
  }
}
