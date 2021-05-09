import { Action, createReducer, on } from '@ngrx/store';
import * as BillActions from './bill.actions';

export const billFeatureKey = 'bill';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(BillActions.loadBills, state => state),
  on(BillActions.loadBillsSuccess, (state, action) => state),
  on(BillActions.loadBillsFailure, (state, action) => state),

);

