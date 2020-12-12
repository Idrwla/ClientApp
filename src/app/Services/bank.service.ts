import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartnerService} from './partner.service';
import {Bank} from '../Shared/bank';
import {Observable} from 'rxjs';
import {bankUrl} from '../../assets/BaseUrls';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  bank: Bank;
  constructor(private http: HttpClient,
              private partner: PartnerService) {
  }
  partnerBank(partId): Observable<Bank>{
    const fromServer$ = this.http.get<Bank>(bankUrl + '/' + partId);
    fromServer$.subscribe( (data) => {
      this.bank = data;
    });
    return fromServer$;
  }
}
