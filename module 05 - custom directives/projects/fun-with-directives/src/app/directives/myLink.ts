import { Directive, inject, input, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Directive({
    selector: '[myLink]', 
    hostDirectives: [
        {
            directive: RouterLink,
            inputs: ['routerLink: myLink']
        },
        RouterLinkActive
    ]
})
export class MyLinkDirective {
    readonly myLink = input.required<string>();

    readonly className = signal('here');

    readonly rla = inject(RouterLinkActive);

    constructor() {
        this.rla.routerLinkActive = this.className();
    }

}