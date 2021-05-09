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
  @Input() rates!: any[];
  constructor() {}

  ngOnInit(): void {}
}
