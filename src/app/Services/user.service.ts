import { Injectable } from '@angular/core';
import {User} from '../Shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  loggedIn = true;
  constructor() { }
  getUser(): User{
    return this.user;
  }
}

