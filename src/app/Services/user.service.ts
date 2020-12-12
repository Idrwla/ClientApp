import { Injectable } from '@angular/core';
import {User} from '../Shared/user';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {singInUrl, userUrl} from '../../assets/BaseUrls';
import {catchError} from 'rxjs/operators';
import {HttpErrorHandlerService} from './http-error-handler.service';
import {dateInputsHaveChanged} from '@angular/material/datepicker/datepicker-input-base';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  loggedIn = false;
  constructor(private http: HttpClient,
              private errorHandler: HttpErrorHandlerService) { }
  getUser(): User{
    return this.user;
  }
  userPost(user: User): Observable<User>{
    const fromServer$ =  this.http.post<User>(userUrl, user);
    fromServer$.subscribe((data) => {
      this.user = data;
      this.loggedIn = true;
    });
    return fromServer$;
  }
  userSingInPost(email: string, pass: string): Observable<User>{
    const params = new HttpParams()
      .set('email', email)
      .set('pass', pass);
    const singIn$ = this.http.post<User>(singInUrl , '', {params});
    singIn$.subscribe( data => {
      console.log(data);
      this.loggedIn = true;
      this.user = data;
    }, () => this.errorHandler.handleError);
    return singIn$;
  }
  logOut(): void{
    this.loggedIn = false;
    this.user = null;
  }
}

