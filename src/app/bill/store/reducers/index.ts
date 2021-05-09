import {
  createFeatureSelector,
  Action,
  combineReducers,
  createSelector,
} from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromBill from './bill.reducer';

export const billFeatureKey = 'bill';

export interface State extends fromRoot.State {
  [fromBill.billFeatureKey]: fromBill.State;
}

export function reducers(state: State | undefined, action: Action) {
  return combineReducers({
    [fromBill.billFeatureKey]: fromBill.reducer,
  })(state, action);
}

export const getBillState = createFeatureSelector<State>(billFeatureKey);

export const selectBillState = createSelector(
  getBillState,
  (state: State) => state[fromBill.billFeatureKey]
);
