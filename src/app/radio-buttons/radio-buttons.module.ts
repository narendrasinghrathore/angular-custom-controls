import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonsRoutingModule } from './radio-buttons-routing.module';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [RadioButtonComponent],
  imports: [
    CommonModule,
    RadioButtonsRoutingModule
  ]
})
export class RadioButtonsModule { }
