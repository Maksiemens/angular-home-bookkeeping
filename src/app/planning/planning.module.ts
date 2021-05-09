import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningPageComponent } from '@app/planning/pages/planning-page/planning-page.component';

@NgModule({
  declarations: [
    PlanningPageComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule
  ]
})
export class PlanningModule { }
