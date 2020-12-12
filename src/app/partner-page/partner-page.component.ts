import {Component, OnInit} from '@angular/core';
import {Partner} from '../Shared/partner';
import {PartnerService} from '../Services/partner.service';
import {Bank} from '../Shared/bank';
import {BankService} from '../Services/bank.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {City} from '../Shared/City';
import {CityService} from '../Services/city.service';
import {Ticket} from '../Shared/Ticket';
import {TicketService} from '../Services/ticket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {

  partner: Partner;
  bank: Bank;
  citys: City[];
  ticketForm: FormGroup = new FormGroup({
    title: new FormControl('' , [ Validators.required]),
    desc: new FormControl(''),
    data: new FormControl(''),
    cost: new FormControl()
  });

  constructor(private partnerService: PartnerService,
              private bankService: BankService,
              private cityService: CityService,
              private ticketService: TicketService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.partner = this.partnerService.thisPartner();
    this.bankService.partnerBank(this.partner.bankId).subscribe((data) => {
      this.bank = data;
      console.log(data);
    });
    this.citys = this.cityService.citys;
  }
  send(): void{
      const tic: Ticket = {
        id: 0,
        partnerId: this.partner.id,
        tittle: this.ticketForm.controls.title.value,
        description: this.ticketForm.controls.desc.value,
        date: this.ticketForm.controls.data.value,
        typeId: 0,
        cityFrom: 0,
        cityTo: 0,
        cost: parseInt(this.ticketForm.controls.cost.value , 10)
      };
      this.ticketService.postTicket(tic).subscribe(() => {
        this.router.navigateByUrl('tickets');
      });
  }
}
