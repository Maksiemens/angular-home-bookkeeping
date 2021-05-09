import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsPageComponent } from '@app/records/pages/records-page/records-page.component';

export const routes: Routes = [
  {
    path: '',
    component: RecordsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
