import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPageRoutingModule } from './registration-page-routing.module';
import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationFormModule } from '@app/auth/components/registration-form/registration-form.module';

@NgModule({
  declarations: [
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    RegistrationFormModule
  ]
})
export class RegistrationPageModule { }
