import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


import { AuthService } from 'src/app/service/auth/auth.service';
import { ToastService } from 'src/app/service/shared/toast/toast.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  showOtp = false;

  signupForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
  });

  otpForm = this.fb.group({
    otp: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private toast: ToastService, private router: Router, private translate: TranslateService) {}

  onSubmit(): void {
    this.showOtp = false;
    this.auth.createUser(this.signupForm.value).subscribe((res) => {
      if (res) {
        this.showOtp = true;
        this.signupForm.reset();
      }
    });
  }

  onSubmitOtp(): void {
    const otp = parseInt(this.otpForm.value.otp);
    this.auth.verifyOtp(otp).subscribe((res) => {
      if (res) {
        this.showOtp = false;
        this.toast.showToast('Account created please login', true);
        this.otpForm.reset();
        this.router.navigateByUrl('/signin');
      }else{
        this.toast.showToast('Invalid otp', false);
      }
    });
  }

  get controls() {
    return this.signupForm.controls;
  }
}
