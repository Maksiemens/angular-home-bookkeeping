import { createAction, props } from '@ngrx/store';

export const loadBills = createAction(
  '[Bill / API] Load Bills'
);
export const loadBillsSuccess = createAction(
  '[Bill / API] Load Bills Success',
  props<{ currency: any }>()
);
export const loadBillsFailure = createAction(
  '[Bill / API] Load Bills Failure',
  props<{ error: any }>()
);
