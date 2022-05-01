import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { FunctionalityComponent } from './functionality/functionality.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  { path :'', component: LandingPageComponent,
  children : [
    { path : '', component : HomeComponent},
    { path : 'functionalities', component : FunctionalityComponent},
    { path : 'options', component : OptionsComponent},
    { path : 'activities', component : ActivitiesComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
