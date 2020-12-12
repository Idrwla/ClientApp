import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../Shared/user';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {
  message: string;
  status: boolean;
  constructor() { }
  handleError(er: Observable<any>): Observable<User>{
    er.subscribe(error => {
      this.message = error;
    });
    this.status = true;
    console.log(er);
    this.tenSecondError();
    return new Observable();
  }
  tenSecondError(): void{
    setTimeout(() => this.status = false, 10000);
  }
}
