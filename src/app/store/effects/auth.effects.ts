import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
// import { PatientsService } from '@app/core/services/patients.service';
// import { UsersService } from '@app/core/services/users.service';
import * as fromAuth from '@app/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, delay, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import * as AuthSelectors from '../selectors/auth.selectors';


@Injectable()
export class AuthEffects {
  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AuthActions.checkAuth,
        AuthActions.loginSuccess,
        // AuthActions.verifyEmailSuccess
      ),
      switchMap(() => {
        return this.authService
          .isAuthenticated$()
          .pipe(
            map((isAuthenticated: boolean) =>
              isAuthenticated
                ? AuthActions.checkAuthSuccess({ isAuthenticated })
                : AuthActions.checkAuthFailure({ isAuthenticated }),
            ),
          );
      }),
    ),
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ userCredentials }) => {
        return this.authService.login(userCredentials).pipe(
          map((response) => {
            // this.materializeService.toast(response.message);
            return AuthActions.loginSuccess();
          }),
          catchError((error) => {
            // this.materializeService.toast(error.message);
            return of(AuthActions.loginFailure({ error }));
          }),
        );
      }),
    ),
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => this.router.navigate(['/'])),
      ),
    { dispatch: false },
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          AuthActions.loginRedirect,
          AuthActions.registrationSuccess,
          AuthActions.logoutSuccess,
          // AuthActions.verifyEmailFailure,
        ),
        tap(() => this.router.navigate(['/auth'])),
      ),
    { dispatch: false },
  );

  // registration$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.registration),
  //     switchMap(({ userCredentials }) => {
  //       return this.authService.registration(userCredentials).pipe(
  //         map((response) => {
  //           this.toastService.success(response.message);
  //           return AuthActions.registrationSuccess();
  //         }),
  //         catchError((error) => {
  //           this.toastService.error(error.message);
  //           return of(AuthActions.registrationFailure({ error }));
  //         }),
  //       );
  //     }),
  //   ),
  // );

  // logout$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.logout),
  //     switchMap(() => {
  //       return this.authService.logout().pipe(
  //         map((response) => {
  //           return AuthActions.logoutSuccess();
  //         }),
  //         catchError((error) => {
  //           return of(AuthActions.logoutFailure({ error }));
  //         }),
  //       );
  //     }),
  //   ),
  // );

  // logoutSuccess$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AuthActions.logoutSuccess),
  //       tap(() => this.authService.clearSession()),
  //     ),
  //   { dispatch: false },
  // );

  // checkEmail$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.checkEmail),
  //     switchMap(({ email }) => {
  //       return this.authService.checkEmail(email).pipe(
  //         map((response) => {
  //           this.toastService.success(response.message);
  //           return AuthActions.checkEmailSuccess();
  //         }),
  //         catchError((error) => {
  //           this.toastService.error(error.message);
  //           return of(AuthActions.checkEmailFailure({ error }));
  //         }),
  //       );
  //     }),
  //   ),
  // );

  // verifyEmail$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.verifyEmail),
  //     concatLatestFrom((action) => [
  //       this.store.pipe(select(AuthSelectors.selectActiveVerifyEmailId)),
  //       this.store.pipe(select(AuthSelectors.selectActiveVerifyEmailHash)),
  //       this.store.pipe(select(AuthSelectors.selectActiveVerifyEmailExpires)),
  //       this.store.pipe(select(AuthSelectors.selectActiveVerifyEmailSignature)),
  //     ]),
  //     switchMap(([action, id, hash, expires, signature]) => {
  //       const verifyEmail = { id, hash, expires, signature };
  //       return this.authService.verifyEmail(verifyEmail).pipe(
  //         map((response) => {
  //           if (response.message) {
  //             this.toastService.success(response.message);
  //           }

  //           return AuthActions.verifyEmailSuccess();
  //         }),
  //         tap(() => this.router.navigate(['/'])),
  //         catchError((error) => {
  //           this.toastService.error(error.message);
  //           return of(AuthActions.verifyEmailFailure({ error }));
  //         }),
  //       );
  //     }),
  //   ),
  // );

  // resetPassword$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.resetPassword),
  //     concatLatestFrom((action) => [
  //       this.store.pipe(select(AuthSelectors.selectActiveResetPasswordToken)),
  //       this.store.pipe(select(AuthSelectors.selectActiveResetPasswordEmail)),
  //     ]),
  //     switchMap(([{ resetPassword }, token, email]) => {
  //       resetPassword = {
  //         ...resetPassword,
  //         token,
  //         email
  //       }
  //       return this.authService.resetPassword(resetPassword).pipe(
  //         map((response) => {
  //           this.toastService.success('Через 5 сек Вы будете перенаправлены на страницу Авторизации');
  //           return AuthActions.resetPasswordSuccess();
  //         }),
  //         delay(5000),
  //         tap(() => this.router.navigate(['/'])),
  //         catchError((error) => {
  //           this.toastService.error(error.message);
  //           return of(AuthActions.resetPasswordFailure({ error }));
  //         }),
  //       );
  //     }),
  //   ),
  // );

  // todo стоит вынести в отдельный файл ..current-user..
  // *Возможно стоит вынести в отдельный файл
  // loadCurrentUser$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.loadCurrentUser, AuthActions.checkAuthSuccess),
  //     switchMap(() => {
  //       return this.usersService.loadUser().pipe(
  //         switchMap((response) => {
  //           return [
  //             AuthActions.loadCurrentUserSuccess({ user: response.data.attributes }),
  //             AuthActions.loadCurrentPatientSuccess({ patient: response.data.meta.patient }),
  //             ...(response.data.attributes.first_visit ? [AuthActions.openUserFirstVisitDialog()] : []),
  //           ];
  //         }),
  //         catchError((error) => {
  //           this.toastService.error(error.message);
  //           return of(AuthActions.loadCurrentUserFailure({ error }));
  //         }),
  //       );
  //     }),
  //   ),
  // );

  // *Возможно стоит вынести в отдельный файл
  // updateCurrentUser$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.updateCurrentUser),
  //     switchMap(({ user }) => {
  //       return this.usersService.updateUser(user).pipe(
  //         switchMap((response) => {
  //           this.toastService.success(response.data.msg);
  //           return [
  //             AuthActions.updateCurrentUserSuccess({ user: response.data.attributes }),
  //             AuthActions.updateCurrentPatientSuccess({ patient: response.data.meta.patient }),
  //           ];
  //         }),
  //         catchError((error) => {
  //           this.toastService.error(error.message);
  //           return of(AuthActions.updateCurrentUserFailure({ error }));
  //         }),
  //       );
  //     }),
  //   ),
  // );

  // updateCurrentPatient$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.updateCurrentPatient),
  //     switchMap(({ patient }) => {
  //       return this.patientsService.updatePatient(patient).pipe(
  //         map((response) => {
  //           this.toastService.success('Данные клиента обновлены');
  //           return AuthActions.updateCurrentPatientSuccess({ patient: response.data.patient });
  //         }),
  //         catchError((error) => {
  //           this.toastService.error('Данные клиента не удалось обновить');
  //           return of(AuthActions.updateCurrentPatientFailure({ error }));
  //         }),
  //       );
  //     }),
  //   ),
  // );

  // TODO возможно понадобится позже
  // removeCurrentPatient$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.removeCurrentPatient),
  //     switchMap(({ patient }) => {
  //       return this.patientsService.updatePatient(patient).pipe(
  //         map((response) => {
  //           this.toastService.success('Данные клиента обновлены');
  //           return AuthActions.updateCurrentPatientSuccess({
  //             patient: response.data.patient,
  //           });
  //         }),
  //         catchError((error) => {
  //           this.toastService.error('Данные клиента не удалось обновить');
  //           return of(AuthActions.updateCurrentPatientFailure({ error }));
  //         }),
  //       );
  //     }),
  //   ),
  //   { dispatch: false },
  // );

  // openUserFirstVisitDialog$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.openUserFirstVisitDialog),
  //     concatLatestFrom((action) => [
  //       this.store.pipe(select(AuthSelectors.selectCurrentUser)),
  //     ]),
  //     exhaustMap(
  //       ([action, currentUser]) =>
  //         this.dialogService.open(FirstVisitDialogComponent, {
  //           data: {
  //             currentUser,
  //           },
  //         }).afterClosed$,
  //     ),
  //     map((result) => {
  //       return result
  //         ? AuthActions.checkUserFirstVisit({ isUserFirstVisit: result })
  //         : AuthActions.checkUserFirstVisitDismiss();
  //     }),
  //   ),
  // );

  // checkUserFirstVisit$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.checkUserFirstVisit),
  //     switchMap(({ isUserFirstVisit }) => {
  //       return this.usersService.changeUserVisit(isUserFirstVisit).pipe(
  //         map((response) => {
  //           this.toastService.success(response.message);
  //           return AuthActions.checkUserFirstVisitSuccess({ user: response.data.attributes });
  //         }),
  //         catchError((error) => {
  //           this.toastService.error(error.message);
  //           return of(AuthActions.checkUserFirstVisitFailure({ error }));
  //         }),
  //       );
  //     }),
  //   ),
  // );

  constructor(
    private actions$: Actions,
    private store: Store<fromAuth.State>,
    private authService: AuthService,
    // private usersService: UsersService,
    private router: Router,
  ) {}
}
