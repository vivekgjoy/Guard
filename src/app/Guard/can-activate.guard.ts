import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate, CanActivateChild {
  

  constructor(private ServiceService:ServiceService, private router:Router ){

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.ServiceService.isAdmin()){
      window.alert("welcome Admin...")
      this.router.navigate(['package']);
      return true;
    }else{
      window.alert("Authorized persons only")
      return false;
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.ServiceService.LogedIn()){
        alert('Login Success');
        this.router.navigate(['aboutus'])
        return true;
      }else{
        window.alert('Provide Authendication');
        return false;
      }
  }
  
}
