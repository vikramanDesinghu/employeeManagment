import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../material.module";
import { LayoutModule } from '@angular/cdk/layout';
import { TranslateModule } from '@ngx-translate/core';


import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
    TranslateModule
  ]
})
export class ProfileModule { }
