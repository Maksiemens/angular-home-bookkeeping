import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillCardComponent implements OnInit {
  @Input() isLoading!: boolean;
  @Input() currency!: any;
  public currencyCodeList = ['EUR', 'RUB', 'UAH', 'USD'];

  get baseCoeficient(): number {
    return 12 / this.currency.rates.RUB / this.currency.rates.EUR;
  }

  constructor() {}

  ngOnInit(): void {}

  getCalculatedCurrency(currencyCode: string): number {
    return Math.round(this.baseCoeficient * this.currency.rates[currencyCode]);
  }
}
