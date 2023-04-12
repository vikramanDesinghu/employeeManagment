import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth/auth.service';
import { ToastService } from 'src/app/service/shared/toast/toast.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  loginError = false;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    public toast: ToastService,
    public router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    const { username , password } = this.loginForm.value;

    this.auth.loginUser(username, password).subscribe((res) => {
      if (res) {
        this.router.navigateByUrl('/profile');
      } else {
        this.toast.showToast('Invalid credentials', false);
      }
    });
  }
}
