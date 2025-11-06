import { Directive, inject } from "@angular/core";
import { Expander } from "./expander";

@Directive({
    standalone: false,
    selector: 'button[app-expander-toggle]', 
    host: {
        '(click)': 'onClick()'
    }
})
export class ExpanderToggleDirective {
    readonly expander = inject(Expander);

    onClick() {
        this.expander.toggle();
    }
}