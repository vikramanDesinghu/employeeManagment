import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class InternationalizationService {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en')
  }

  setLang(lang: string){
    this.translate.use(lang);
  }
}
