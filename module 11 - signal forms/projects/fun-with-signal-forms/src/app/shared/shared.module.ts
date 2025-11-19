import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Field } from "@angular/forms/signals";
import { RouterModule } from "@angular/router";
import { FieldExtensionsDirective } from "./directives/field-extensions-directive";
import { FieldComponent } from "./components/field/field";

export const exportables = [
    CommonModule, 
    RouterModule, 
    Field, 
    FieldExtensionsDirective, 
    FieldComponent
]

@NgModule({
    imports: [...exportables],
    exports: [...exportables],
})
export class SharedModule {}