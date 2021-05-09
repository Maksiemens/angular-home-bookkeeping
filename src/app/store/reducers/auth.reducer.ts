import { User } from '@app/shared/models/user.model';
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: User | null;
  error: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const initialState: State = {
  user: null,
  error: null,
  isAuthenticated: false,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,

  on(
    AuthActions.checkAuthSuccess,
    AuthActions.checkAuthFailure,
    (state, { isAuthenticated }) => ({
    ...state,
    isAuthenticated,
  })),

  on(AuthActions.login, (state) => ({
    ...state,
    error: null,
    isLoading: true,
  })),
  on(AuthActions.loginSuccess, (state) => ({
    ...state,
    error: null,
    isLoading: false,
    isAuthenticated: true,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(AuthActions.logout, (state) => ({
    ...state,
    error: null,
    isLoading: true,
  })),
  on(AuthActions.logoutSuccess, (state) => initialState),
  on(AuthActions.logoutFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(AuthActions.registration, (state) => ({
    ...state,
    error: null,
    isLoading: true,
  })),
  on(AuthActions.registrationSuccess, (state) => ({
    ...state,
    error: null,
    isLoading: false,
  })),
  on(AuthActions.registrationFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(AuthActions.loadCurrentUser, (state) => ({
    ...state,
    error: null,
    isLoading: true,
    isLoaded: false,
  })),
  on(AuthActions.loadCurrentUserSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
    isLoading: false,
    isLoaded: true,
  })),
  on(AuthActions.loadCurrentUserFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
    isLoaded: true,
  })),

  on(AuthActions.updateCurrentUser, (state, { user }) => ({
    ...state,
    error: null,
    isLoading: true,
  })),
  on(AuthActions.updateCurrentUserSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
    isLoading: false,
  })),
  on(AuthActions.updateCurrentUserFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  // on(AuthActions.loadCurrentPatient, (state) => ({
  //   ...state,
  //   error: null,
  //   isLoading: true,
  // })),
  // on(AuthActions.loadCurrentPatientSuccess, (state, { patient }) => ({
  //   ...state,
  //   patient,
  //   error: null,
  //   isLoading: false,
  // })),
  // on(AuthActions.loadCurrentPatientFailure, (state, { error }) => ({
  //   ...state,
  //   error,
  //   isLoading: false,
  // })),

  // on(AuthActions.updateCurrentPatient, (state, { patient }) => ({
  //   ...state,
  //   error: null,
  //   isLoading: true,
  // })),
  // on(AuthActions.updateCurrentPatientSuccess, (state, { patient }) => ({
  //   ...state,
  //   patient,
  //   error: null,
  //   isLoading: false,
  // })),
  // on(AuthActions.updateCurrentPatientFailure, (state, { error }) => ({
  //   ...state,
  //   error,
  //   isLoading: false,
  // })),

  // on(AuthActions.checkUserFirstVisit, (state, { isUserFirstVisit }) => ({
  //   ...state,
  //   error: null,
  //   isLoading: true,
  // })),
  // on(AuthActions.checkUserFirstVisitSuccess, (state, { user }) => ({
  //   ...state,
  //   user,
  //   error: null,
  //   isLoading: false,
  // })),
  // on(AuthActions.checkUserFirstVisitFailure, (state, { error }) => ({
  //   ...state,
  //   error,
  //   isLoading: false,
  // })),

  // // !manual update
  // // todo refactor
  // on(AuthActions.selectedCurrentPatient, (state, { selectedPatient }) => ({
  //   ...state,
  //   user: {
  //     ...state.user,
  //     select_patient: selectedPatient.select_patient,
  //   },
  //   patient: selectedPatient.patient
  // })),

  // on(AuthActions.removeCurrentPatient, (state) => ({
  //   ...state,
  //   user: {
  //     ...state.user,
  //     select_patient: null,
  //   },
  // })),

  // on(AuthActions.updateCurrentUserProfile, (state, { user_profile }) => ({
  //   ...state,
  //   user: {
  //     ...state.user,
  //     user_profile
  //   },
  // })),

  // on(AuthActions.checkEmail, (state) => ({
  //   ...state,
  //   isLoading: true,
  // })),
  // on(AuthActions.checkEmailSuccess, (state) => ({
  //   ...state,
  //   isLoading: false,
  // })),
  // on(AuthActions.checkEmailFailure, (state, { error }) => ({
  //   ...state,
  //   isLoading: false,
  //   error
  // })),

  // on(AuthActions.verifyEmail, (state) => ({
  //   ...state,
  //   isLoading: true,
  // })),
  // on(AuthActions.verifyEmailSuccess, (state) => ({
  //   ...state,
  //   isAuthenticated: true,
  //   isLoading: false,
  // })),
  // on(AuthActions.verifyEmailFailure, (state, { error }) => ({
  //   ...state,
  //   isLoading: false,
  //   error
  // })),

  // on(AuthActions.resetPassword, (state) => ({
  //   ...state,
  //   isLoading: true,
  // })),
  // on(AuthActions.resetPasswordSuccess, (state) => ({
  //   ...state,
  //   isLoading: false,
  // })),
  // on(AuthActions.resetPasswordFailure, (state, {error}) => ({
  //   ...state,
  //   isLoading: false,
  //   error
  // })),
);

export const selectUser = (state: State) => state.user;
export const selectError = (state: State) => state.error;
export const selectIsAuthenticated = (state: State) => state.isAuthenticated;
export const selectIsLoading = (state: State) => state.isLoading;
