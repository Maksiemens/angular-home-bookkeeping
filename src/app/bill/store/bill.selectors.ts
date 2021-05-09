import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBill from './bill.reducer';

export const selectBillState = createFeatureSelector<fromBill.State>(
  fromBill.billFeatureKey
);
