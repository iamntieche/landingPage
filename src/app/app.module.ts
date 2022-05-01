import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader   } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module'; 
import { CountdownModule } from 'ngx-countdown';
import { MetismenuAngularModule } from '@metismenu/angular';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxEditorModule } from 'ngx-editor';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpInterceptorProviders } from './interceptor';
import { LandingPageModule } from './inventual/landing-page/landing-page.module';
import { SharedModule } from './shared/shared.module';
 
 




@NgModule({
  imports: [ 
    AppRoutingModule,

    MaterialModule, 
    CountdownModule,
    MetismenuAngularModule, 
    NgxFileDropModule,
    NgxEditorModule, 

    LandingPageModule,

    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}