import { createReducer, on } from '@ngrx/store';
import * as UiActions from '../actions/ui.actions';

export const uiFeatureKey = 'ui';

export interface State {
  isSidenavActive: boolean;
}

const initialState: State = {
  isSidenavActive: false,
};

export const reducer = createReducer(
  initialState,
  on(UiActions.closeSidenav, state => ({ isSidenavActive: false })),
  on(UiActions.openSidenav, state => ({ isSidenavActive: true })),
);

export const selectIsSidenavActive = (state: State) => state.isSidenavActive;
