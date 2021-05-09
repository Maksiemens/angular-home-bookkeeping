import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillCardComponent } from './bill-card.component';

@NgModule({
  declarations: [
    BillCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BillCardComponent
  ]
})
export class BillCardModule { }
