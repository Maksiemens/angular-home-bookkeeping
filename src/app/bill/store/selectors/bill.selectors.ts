import { createSelector } from '@ngrx/store';
import * as fromBill from '../reducers/bill.reducer';
import { selectBillState } from '../reducers';

export const selectIsLoading = createSelector(
  selectBillState,
  fromBill.selectIsLoading,
);

export const selectCurrentBillId = createSelector(
  selectBillState,
  fromBill.getSelectedBillId,
);

export const selectCurrency = createSelector(
  selectBillState,
  fromBill.selectCurrency,
);
