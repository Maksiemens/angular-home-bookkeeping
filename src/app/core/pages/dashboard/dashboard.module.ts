import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from '@app/core/pages/dashboard/dashboard-routing.module';
import { HeaderModule } from '@app/core/components/header/header.module';
import { SidenavModule } from '@app/core/components/sidenav/sidenav.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    SidenavModule
  ],
})
export class DashboardModule {}
