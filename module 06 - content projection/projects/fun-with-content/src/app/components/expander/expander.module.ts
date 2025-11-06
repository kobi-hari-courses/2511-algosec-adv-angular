import { NgModule } from '@angular/core';
import { Expander } from './expander';
import { ExpanderToggleDirective } from './app-expander-toggle.directive';

const declareables = [Expander, ExpanderToggleDirective];

@NgModule({
  declarations: [...declareables],
  exports: [...declareables],
})
export class ExpanderModule {}
