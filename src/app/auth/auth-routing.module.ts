import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from '@app/auth/pages/auth-page/auth-page.component';
import { LoggedInGuard } from '@app/core/guards/logged-in.guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        data: { page: 'login-page' },
        loadChildren: () =>
          import('@app/auth/pages/login-page/login-page.module').then(
            (m) => m.LoginPageModule
          ),
      },
      {
        path: 'registration',
        data: { page: 'registration-page' },
        loadChildren: () =>
          import('@app/auth/pages/registration-page/registration-page.module').then(
            (m) => m.RegistrationPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
