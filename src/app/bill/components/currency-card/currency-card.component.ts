import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyCardComponent implements OnInit {
  @Input() isLoading!: boolean;
  @Input() currency!: any;

  constructor() {}

  ngOnInit(): void {}
}
