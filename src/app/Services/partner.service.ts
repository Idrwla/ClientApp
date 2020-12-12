import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {partnerUrl} from '../../assets/BaseUrls';
import {HttpErrorHandlerService} from './http-error-handler.service';
import {Observable} from 'rxjs';
import {Partner} from '../Shared/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  isPartner = false;
  partnerAcc: Partner;
  constructor(private user: UserService,
              private http: HttpClient,
              private errorHandler: HttpErrorHandlerService) {
  }
  thisPartner(): Partner{
    return this.partnerAcc;
  }
  partner(): void {
    this.http.get<Partner>(partnerUrl + '/' + this.user.getUser().id)
      .subscribe((data) => {
        this.partnerAcc = data;
        this.isPartner = true;
      }, (er) => {
        this.errorHandler.handleError(er);
      });
  }
  becomePartner(partner): Observable<Partner>{
    const fromServer$ = this.http.post<Partner>(partnerUrl, partner);
    fromServer$.subscribe( (data) => {
      this.partnerAcc = data;
      this.isPartner = true;
    }, (er) => {
      this.errorHandler.handleError(er);
    });
    return fromServer$;
  }
}
