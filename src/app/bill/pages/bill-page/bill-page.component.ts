import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromBill from '@app/bill/store';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss'],
})
export class BillPageComponent implements OnInit {
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<any>;
  public currency$!: Observable<any>;

  constructor(
    private store: Store<fromBill.State>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.loadUser().subscribe(res => {
      console.log(res);
    });
    this.store.dispatch(fromBill.loadBills());
    this.isLoading$ = this.store.pipe(select(fromBill.selectIsLoading));
    this.currency$ = this.store.pipe(select(fromBill.selectCurrency));
  }

  loadCurrency(): void {
    this.store.dispatch(fromBill.loadBills());
  }
}
