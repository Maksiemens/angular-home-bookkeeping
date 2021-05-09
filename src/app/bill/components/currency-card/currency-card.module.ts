import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyCardComponent } from './currency-card.component';



@NgModule({
  declarations: [
    CurrencyCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyCardComponent
  ]
})
export class CurrencyCardModule { }
