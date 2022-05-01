import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from './material/material.module'; 
import { MetismenuAngularModule } from '@metismenu/angular';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxEditorModule } from 'ngx-editor'; 

 
 


@NgModule({
  declarations: [
   
  ], 
  imports: [
    CommonModule,  
    MaterialModule, 
    MetismenuAngularModule, 
    NgxFileDropModule,
    NgxEditorModule, 
  ],
  providers: [DatePipe]
})
export class SharedModule { }
