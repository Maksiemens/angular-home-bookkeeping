import { Params, RouterStateSnapshot, Data } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export const routerFeatureKey = 'router';

export interface RouterState {
  url: string;
  params: Params;
  queryParams: Params;
  data: Data;
  fragment: string | null;
}

export class CustomSerializer implements RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    let route = routerState.root;
    let { params, queryParams, data, fragment } = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
      params = { ...params, ...route.params };
      queryParams = { ...queryParams, ...route.queryParams };
      data = { ...data, ...route.data };
      fragment = route.fragment;
    }

    return {
      url: routerState.url,
      params,
      queryParams,
      data,
      fragment,
    };
  }
}
