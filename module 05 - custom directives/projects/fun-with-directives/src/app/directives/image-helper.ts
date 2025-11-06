import { Directive, input } from "@angular/core";

@Directive({
    selector: "img", 
    host: {
        '[attr.title]': 'src()',
    }
})
export class ImageHelper {
    readonly src = input('');

}
