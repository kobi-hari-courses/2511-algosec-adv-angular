import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Field } from "@angular/forms/signals";
import { RouterModule } from "@angular/router";
import { FieldExtensionsDirective } from "./directives/field-extensions-directive";
import { FieldComponent } from "./components/field/field";
import { StarRating } from "./components/star-rating/star-rating";

export const exportables = [
    CommonModule, 
    RouterModule, 
    Field, 
    FieldExtensionsDirective, 
    FieldComponent, 
    StarRating
]

@NgModule({
    imports: [...exportables],
    exports: [...exportables],
})
export class SharedModule {}