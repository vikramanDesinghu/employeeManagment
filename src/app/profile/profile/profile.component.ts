import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { InternationalizationService } from '../../service/shared/internationalization/internationalization.service';

interface Lang {
  name: string;
  value: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  selectedLang = 'en';
  languages = [
    { name: 'English', value: 'en' },
    { name: 'french', value: 'fr' },
    { name: 'Czech Republic ', value: 'cs' },
  ];

  profileForm = this.fb.group({
    dob: ['', [Validators.required]],
    doj: ['', [Validators.required]],
    experience: ['', [Validators.required, Validators.min, Validators.max]],
    hobbies: [''],
    phone: ['', [Validators.required, Validators.pattern]],
    bloodGroup: [''],
    address: [''],
  });

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private translate: InternationalizationService
  ) {}

  get controls() {
    return this.profileForm.controls;
  }

  changeLang() {
    this.translate.setLang(this.selectedLang);
  }
}
