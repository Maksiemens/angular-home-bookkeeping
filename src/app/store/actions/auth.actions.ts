import { createAction, props } from '@ngrx/store';
import { User } from '@app/shared/models/user.model';

export const checkAuth = createAction(
  '[Auth] Check Auth'
);
export const checkAuthSuccess = createAction(
  '[Auth] Check Auth Success',
  props<{ isAuthenticated: boolean }>(),
);
export const checkAuthFailure = createAction(
  '[Auth] Check Auth Failure',
  props<{ isAuthenticated: boolean }>(),
);

export const login = createAction(
  '[Auth/API] Login',
  props<{ userCredentials: any }>(),
);
export const loginSuccess = createAction(
  '[Auth/API] Login Success'
);
export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: any }>(),
);

export const loginRedirect = createAction(
  '[Auth] Login Redirect'
);

export const logout = createAction(
  '[Auth/API] Logout'
);
export const logoutSuccess = createAction(
  '[Auth/API] Logout Success'
);
export const logoutFailure = createAction(
  '[Auth/API] Logout Failure',
  props<{ error: any }>(),
);

export const registration = createAction(
  '[Auth/API] Registration',
  props<{ userCredentials: any }>(),
);
export const registrationSuccess = createAction(
  '[Auth/API] Registration Success',
);
export const registrationFailure = createAction(
  '[Auth/API] Registration Failure',
  props<{ error: any }>(),
);

export const checkEmail = createAction(
  '[Auth/API] Check Email',
  props<{ email: string }>(),
);
export const checkEmailSuccess = createAction(
  '[Auth/API] Check Email Success',
);
export const checkEmailFailure = createAction(
  '[Auth/API] Check Email Failure',
  props<{ error: any }>(),
);

// export const verifyEmail = createAction(
//   '[Auth/API] Verify Email',
// );
// export const verifyEmailSuccess = createAction(
//   '[Auth/API] Verify Email Success',
// );
// export const verifyEmailFailure = createAction(
//   '[Auth/API] Verify Email Failure',
//   props<{ error: any }>(),
// );

// export const resetPassword = createAction(
//   '[Auth/API] Reset Password',
//   props<{ resetPassword: ResetPasswordModel }>(),
// );
// export const resetPasswordSuccess = createAction(
//   '[Auth/API] Reset Password Success',
// );
// export const resetPasswordFailure = createAction(
//   '[Auth/API] Reset Password Failure',
//   props<{ error: any }>(),
// );

export const loadCurrentUser = createAction(
  '[Auth/API] Load Current User'
);
export const loadCurrentUserSuccess = createAction(
  '[Auth/API] Load Current User Success',
  props<{ user: User }>(),
);
export const loadCurrentUserFailure = createAction(
  '[Auth/API] Load Current User Failure',
  props<{ error: any }>(),
);

export const updateCurrentUser = createAction(
  '[Auth/API] Update Current User',
  props<{ user: User }>(),
);
export const updateCurrentUserSuccess = createAction(
  '[Auth/API] Update Current User Success',
  props<{ user: User }>(),
);
export const updateCurrentUserFailure = createAction(
  '[Auth/API] Update Current User Failure',
  props<{ error: any }>(),
);

// export const loadCurrentPatient = createAction(
//   '[Auth/API] Load Current Patient',
//   props<{ patientId: number }>(),
// );
// export const loadCurrentPatientSuccess = createAction(
//   '[Auth/API] Load Current Patient Success',
//   props<{ patient: Patient }>(),
// );
// export const loadCurrentPatientFailure = createAction(
//   '[Auth/API] Load Current Patient Failure',
//   props<{ error: any }>(),
// );

// export const updateCurrentPatient = createAction(
//   '[Auth/API] Update Current Patient',
//   props<{ patient: Patient }>(),
// );
// export const updateCurrentPatientSuccess = createAction(
//   '[Auth/API] Update Current Patient Success',
//   props<{ patient: Patient }>(),
// );
// export const updateCurrentPatientFailure = createAction(
//   '[Auth/API] Update Current Patient Failure',
//   props<{ error: any }>(),
// );

export const openUserFirstVisitDialog = createAction(
  '[Auth] Open User First Visit Dialog',
);
export const checkUserFirstVisitDismiss = createAction(
  '[Auth] Open User First Visit Dialog Dismiss',
);
export const checkUserFirstVisit = createAction(
  '[Auth/API] Check User First Visit',
  props<{ isUserFirstVisit: boolean }>(),
);
export const checkUserFirstVisitSuccess = createAction(
  '[Auth/API] Check User First Visit Success',
  props<{ user: User }>(),
);
export const checkUserFirstVisitFailure = createAction(
  '[Auth/API] Check User First Visit Failure',
  props<{ error: any }>(),
);


// !manual update
export const selectedCurrentPatient = createAction(
  '[Auth/API] Selected Current Patient',
  props<{ selectedPatient: any }>(),
);

export const removeCurrentPatient = createAction(
  '[Auth/API] Remove Current Patient',
);

export const updateCurrentUserProfile = createAction(
  '[Auth] Update Current User Profile',
  props<{ user_profile: any }>(),
);
