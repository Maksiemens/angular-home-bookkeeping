import { createSelector } from '@ngrx/store';
import * as fromRouter from '../reducers/router.reducer';
import { selectRouterState } from '../reducers';

export const selectRouteUrl = createSelector(
  selectRouterState,
  (state) => (state && state.state && state.state.url) || '',
);

export const selectRouteParams = createSelector(
  selectRouterState,
  (state) => (state && state.state && state.state.params) || {},
);

export const selectRouteQueryParams = createSelector(
  selectRouterState,
  (state) => (state && state.state && state.state.queryParams) || {},
);

export const selectRouteParamsData = createSelector(
  selectRouterState,
  (state) => (state && state.state && state.state.data) || {},
);

export const selectRouteFragment = createSelector(
  selectRouterState,
  (state) => (state && state.state && state.state.fragment) || '',
);

export const selectRouterParam = (paramName: string) =>
  createSelector(selectRouteParams, (params) => params[paramName]);

export const selectRouterQueryParam = (paramName: string) =>
  createSelector(selectRouteQueryParams, (params) => params[paramName]);

export const selectRouterParamData = (paramDataName: string) =>
  createSelector(selectRouteParamsData, (params) => params[paramDataName]);
