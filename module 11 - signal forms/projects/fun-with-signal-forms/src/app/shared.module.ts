import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Field } from "@angular/forms/signals";
import { RouterModule } from "@angular/router";

export const exportables = [
    CommonModule, 
    RouterModule, 
    Field
]

@NgModule({
    imports: [...exportables],
    exports: [...exportables],
})
export class SharedModule {}