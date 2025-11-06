import { Directive, effect, ElementRef, inject, input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[myIf]'
})
export class MyIfDirective {
    readonly template = inject(TemplateRef);
    readonly vcr = inject(ViewContainerRef);

    readonly myIf = input.required<boolean>();

    constructor() {
        effect(() => {
            if (this.myIf()) {
                this.vcr.createEmbeddedView(this.template);
            }
            else {
                this.vcr.clear();
            }
            
        })

        console.log('MyIfDirective created', this.template);
    }
    
}