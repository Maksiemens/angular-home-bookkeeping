import { createReducer, on } from '@ngrx/store';
import * as BillActions from '../actions/bill.actions';

export const billFeatureKey = 'bill';

export interface State {
  selectedBillId: number | null;
  isLoading: boolean;
  error: any;
  currency: any;
}

export const initialState: State = {
  selectedBillId: null,
  isLoading: false,
  error: null,
  currency: null,
};


export const reducer = createReducer(
  initialState,

  on(BillActions.loadBills, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(BillActions.loadBillsSuccess, (state, { currency }) => ({
    ...state,
    isLoading: false,
    currency,
  })),
  on(BillActions.loadBillsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
);

export const getSelectedBillId = (state: State) => state.selectedBillId;
export const selectIsLoading = (state: State) => state.isLoading;
export const selectCurrency = (state: State) => state.currency;
