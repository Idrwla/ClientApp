import { Component, OnInit } from '@angular/core';
import {Ticket} from '../Shared/Ticket';
import {TicketService} from '../Services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[];
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe( (data) => {
      this.tickets = data;
    });
  }
}
