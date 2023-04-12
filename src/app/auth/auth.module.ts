import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [SigninComponent, SignupComponent, OtpComponent],
  imports: [
    AuthRoutingModule
  ],
})
export class AuthModule {}
