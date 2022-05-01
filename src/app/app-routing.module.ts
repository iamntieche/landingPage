import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';   

const routes: Routes = [ 
  { path: '',loadChildren: () => import('../app/inventual/landing-page/landing-page.module').then(s => s.LandingPageModule) }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
