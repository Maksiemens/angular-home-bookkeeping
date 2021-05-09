import {
  createFeatureSelector,
  Action,
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import * as fromNgrxRouter from '@ngrx/router-store';
import * as fromRouter from './router.reducer';
import * as fromUi from './ui.reducer';
import * as fromAuth from './auth.reducer';
import * as AuthActions from '../actions/auth.actions';


export interface State {
  [fromRouter.routerFeatureKey]: fromNgrxRouter.RouterReducerState<fromRouter.RouterState>;
  [fromUi.uiFeatureKey]: fromUi.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
  factory: () => ({
    [fromRouter.routerFeatureKey]: fromNgrxRouter.routerReducer,
    [fromUi.uiFeatureKey]: fromUi.reducer,
    [fromAuth.authFeatureKey]: fromAuth.reducer,
  }),
});

export function resetRoot(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => reducer(action.type === AuthActions.logoutSuccess.type ? undefined : state, action);
}

export const metaReducers: MetaReducer<State>[] = [ resetRoot ];

export const selectRouterState = createFeatureSelector<fromNgrxRouter.RouterReducerState<fromRouter.RouterState>>(fromRouter.routerFeatureKey);
export const selectUiState = createFeatureSelector<State, fromUi.State>(fromUi.uiFeatureKey);
export const selectAuthState = createFeatureSelector<State, fromAuth.State>(fromAuth.authFeatureKey);
