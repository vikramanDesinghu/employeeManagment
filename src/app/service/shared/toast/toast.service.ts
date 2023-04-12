import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private sanck: MatSnackBar) {}

  showToast(message: string, isInfo: boolean): void {
    this.sanck.open(message,'Ok', {
      panelClass: [isInfo ? 'info' : 'error'],
    });
  }
}
