import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerRegGuard implements CanActivate {
  constructor(private user: UserService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.user.loggedIn){
      alert('Вы не вошли в систему, пожалуйста войдите потом продолжайте.');
      return false;
    }
    return true;
  }
}
