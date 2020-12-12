import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../Shared/Ticket';
import {ticketUrl} from '../../assets/BaseUrls';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  ok: boolean;
  constructor(private http: HttpClient) { }
  getTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(ticketUrl);
  }
  postTicket(tic: Ticket): Observable<any>{
    const fromServer$  = this.http.post<Ticket>(ticketUrl, tic);
    fromServer$.subscribe( () => {
      this.ok = true;
    });
    return fromServer$;
  }
}
