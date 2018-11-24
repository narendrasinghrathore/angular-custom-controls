import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadioButtonComponent } from './radio-button/radio-button.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: RadioButtonComponent, children: [
      { path: '', component: RadioButtonComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioButtonsRoutingModule { }
