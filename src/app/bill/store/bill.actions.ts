import { createAction, props } from '@ngrx/store';

export const loadBills = createAction(
  '[Bill] Load Bills'
);

export const loadBillsSuccess = createAction(
  '[Bill] Load Bills Success',
  props<{ data: any }>()
);

export const loadBillsFailure = createAction(
  '[Bill] Load Bills Failure',
  props<{ error: any }>()
);
