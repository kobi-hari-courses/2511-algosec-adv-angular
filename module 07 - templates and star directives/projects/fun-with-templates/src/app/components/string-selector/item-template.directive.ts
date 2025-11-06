import { Directive, inject, TemplateRef } from "@angular/core";

@Directive({
    selector: '[item-template]'
})

export class ItemTemplateDirective {
    readonly template = inject(TemplateRef);

}