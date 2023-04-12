import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [SigninComponent, SignupComponent, OtpComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, MaterialModule, TranslateModule],
})
export class AuthModule {}
