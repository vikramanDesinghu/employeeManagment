import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:3000';

  constructor() {}

  loginUser(username: string, password: string): Observable<boolean> {
    let result = false;
    if (username === '1' && password === '1') {
      result = true;
    }
    return of(result);
  }

  // save JWT token in local storage
  setAuthToken(token: string): void {
    localStorage.setItem('token', token);
  }

  logOut(): void {
    localStorage.removeItem('token');
  }

  isLogin(): boolean {
    return localStorage.getItem('token') !== null;
  }

  verifyOtp(otp: number): Observable<boolean> {
    return of(otp === 1234);
  }


  createUser(user: User): Observable<string> {
    return of('created');
  }
}
