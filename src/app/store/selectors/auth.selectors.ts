import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';
import * as fromRoot from '@app/store';
// import * as fromShared from '@app/shared/store';
import * as RouterSelectors from '../selectors/router.selectors';

export const selectActiveVerifyEmailId = RouterSelectors.selectRouterQueryParam('id');
export const selectActiveVerifyEmailHash = RouterSelectors.selectRouterQueryParam('hash');
export const selectActiveVerifyEmailExpires = RouterSelectors.selectRouterQueryParam('expires');
export const selectActiveVerifyEmailSignature = RouterSelectors.selectRouterQueryParam('signature');

export const selectActiveResetPasswordToken = RouterSelectors.selectRouterQueryParam('token');
export const selectActiveResetPasswordEmail = RouterSelectors.selectRouterQueryParam('email');

export const selectIsLoading = createSelector(
  selectAuthState,
  fromAuth.selectIsLoading,
);

export const selectError = createSelector(
  selectAuthState,
  fromAuth.selectError,
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  fromAuth.selectIsAuthenticated,
);

export const selectCurrentUser = createSelector(
  selectAuthState,
  fromAuth.selectUser,
);
