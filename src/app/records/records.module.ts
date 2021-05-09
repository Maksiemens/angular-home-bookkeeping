import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsRoutingModule } from './records-routing.module';
import { RecordsPageComponent } from '@app/records/pages/records-page/records-page.component';

@NgModule({
  declarations: [
    RecordsPageComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule
  ]
})
export class RecordsModule { }
