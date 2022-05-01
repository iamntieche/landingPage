import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FunctionalityComponent } from './functionality/functionality.component';
import { OptionsComponent } from './options/options.component';
import { ActivitiesComponent } from './activities/activities.component';


@NgModule({
  declarations: [
    NavBarComponent,
     LandingPageComponent,
      FooterComponent,
       HomeComponent,
       FunctionalityComponent,
       OptionsComponent,
       ActivitiesComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LandingPageModule { }
