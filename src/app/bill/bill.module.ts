import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillRoutingModule } from './bill-routing.module';
import { BillPageComponent } from '@app/bill/pages/bill-page/bill-page.component';
import { BillCardModule } from '@app/bill/components/bill-card/bill-card.module';
import { CurrencyCardModule } from '@app/bill/components/currency-card/currency-card.module';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, billFeatureKey, reducers } from './store';

@NgModule({
  declarations: [
    BillPageComponent
  ],
  imports: [
    CommonModule,
    BillRoutingModule,
    BillCardModule,
    CurrencyCardModule,
    // NGRX
    StoreModule.forFeature(billFeatureKey, reducers),
    EffectsModule.forFeature(effects),
  ]
})
export class BillModule { }
