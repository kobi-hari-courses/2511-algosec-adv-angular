import { NgModule } from '@angular/core';
import { Expander } from './expander';
import { ExpanderToggleDirective } from './app-expander-toggle.directive';
import { ExpanderToggle } from './expander-toggle/expander-toggle';

const declareables = [Expander, ExpanderToggleDirective, ExpanderToggle];

@NgModule({
  declarations: [...declareables],
  exports: [...declareables],
})
export class ExpanderModule {}
