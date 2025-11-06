import { Directive, signal } from "@angular/core";

@Directive({
    selector: "[app-mouse-follow]",
    host: {
        '(mousemove)': 'onMouseMove($event)',
        '[style.--mouse-x.px]': 'x()',
        '[style.--mouse-y.px]': 'y()',
        '[style.--mouse-x-ratio]': 'xRatio()',
        '[style.--mouse-y-ratio]': 'yRatio()',
    }, 
    exportAs: 'mouseFollow'
})
export class MouseFollowDirective {
    readonly x = signal(0);
    readonly y = signal(0);

    readonly xRatio = signal(0);
    readonly yRatio = signal(0);

    onMouseMove(event: MouseEvent) {
        const element = (event.target as HTMLElement);
        const x = event.clientX;
        const y = event.clientY;
        const rect = element.getBoundingClientRect();

        const xRatio = (x - rect.left) / rect.width;
        const yRatio = (y - rect.top) / rect.height;
        this.x.set(x);
        this.y.set(y);
        this.xRatio.set(xRatio);
        this.yRatio.set(yRatio);
    }

}