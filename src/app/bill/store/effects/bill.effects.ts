import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromBill from '../../store';
import * as BillActions from '../actions/bill.actions';
import { BillService } from '@app/core/services/bill.service';

@Injectable()
export class BillEffects {
  // loadBills$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(BillActions.loadBills),
  //     concatMap(() =>
  //       /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       EMPTY.pipe(
  //         map((data) => BillActions.loadBillsSuccess({ data })),
  //         catchError((error) => of(BillActions.loadBillsFailure({ error })))
  //       )
  //     )
  //   );
  // });

  loadBills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BillActions.loadBills),
      switchMap(() => {
        return this.billService.loadCurrency().pipe(
          map((response) => {
            return BillActions.loadBillsSuccess({ currency: response });
          }),
          catchError((error) => of(BillActions.loadBillsFailure({ error })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromBill.State>,
    private billService: BillService
  ) {}
}
