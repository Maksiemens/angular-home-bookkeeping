import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as BillActions from './bill.actions';



@Injectable()
export class BillEffects {

  loadBills$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(BillActions.loadBills),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => BillActions.loadBillsSuccess({ data })),
          catchError(error => of(BillActions.loadBillsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
