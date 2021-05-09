import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillRoutingModule } from './bill-routing.module';
import { BillPageComponent } from '@app/bill/pages/bill-page/bill-page.component';
import { BillCardModule } from '@app/bill/components/bill-card/bill-card.module';
import { CurrencyCardModule } from '@app/bill/components/currency-card/currency-card.module';
import { EffectsModule } from '@ngrx/effects';
import { BillEffects } from './store/bill.effects';

@NgModule({
  declarations: [
    BillPageComponent
  ],
  imports: [
    CommonModule,
    BillRoutingModule,
    BillCardModule,
    CurrencyCardModule,
    EffectsModule.forFeature([BillEffects]),
  ]
})
export class BillModule { }
