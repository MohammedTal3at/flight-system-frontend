import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthServiceService } from '../Auth/auth-service.service';
import { Router } from '@angular/router';
//guard
@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private authservice:AuthServiceService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
    //this.router.navigateByUrl('signin');
    //return this.authservice.getUserLogin();
    if(this.authservice.IsLoggedIn==true)
    {
      return true;
    }
    else{
      this.router.navigate(['signin']);
      return false;
    }
  }
}
