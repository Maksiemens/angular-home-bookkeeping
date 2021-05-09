import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningPageComponent } from '@app/planning/pages/planning-page/planning-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PlanningPageComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
