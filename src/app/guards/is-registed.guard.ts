import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../inventual/authentification/services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class IsRegistedGuard implements CanActivate {
  
  constructor(
    private authentificationService:AuthentificationService,
    private router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let username = ''+localStorage.getItem('WQSDFRG');
     if(username == null || username == undefined || username == 'null'){
       return this.router.navigate(['/login']);
     }
      return this.authentificationService.isCreated(username);
  }
  
}
