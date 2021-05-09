import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@app/core/pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bill',
      },
      {
        path: 'bill',
        data: { page: 'bill' },
        loadChildren: () =>
          import('@app/bill/bill.module').then((m) => m.BillModule),
      },
      {
        path: 'history',
        data: { page: 'history' },
        loadChildren: () =>
          import('@app/history/history.module').then((m) => m.HistoryModule),
      },
      {
        path: 'planning',
        data: { page: 'planning' },
        loadChildren: () =>
          import('@app/planning/planning.module').then((m) => m.PlanningModule),
      },
      {
        path: 'records',
        data: { page: 'records' },
        loadChildren: () =>
          import('@app/records/records.module').then((m) => m.RecordsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
