import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from './user.service';
import {PartnerService} from './partner.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerRegGuard implements CanActivate {
  constructor(private user: UserService,
              private partner: PartnerService,
              private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.user.loggedIn){
      alert('Вы не вошли в систему, пожалуйста войдите потом продолжайте.');
      return false;
    }
    if (this.partner.isPartner !== true){
      return this.router.navigateByUrl('becomePartner');
    }
    return true;
  }
}
