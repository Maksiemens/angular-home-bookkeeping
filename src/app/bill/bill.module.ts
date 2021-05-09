import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillRoutingModule } from './bill-routing.module';
import { BillPageComponent } from '@app/bill/pages/bill-page/bill-page.component';

@NgModule({
  declarations: [
    BillPageComponent
  ],
  imports: [
    CommonModule,
    BillRoutingModule
  ]
})
export class BillModule { }
