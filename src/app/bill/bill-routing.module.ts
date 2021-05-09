import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillPageComponent } from '@app/bill/pages/bill-page/bill-page.component';

export const routes: Routes = [
  {
    path: '',
    component: BillPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
