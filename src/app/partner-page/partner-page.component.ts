import {Component, OnInit} from '@angular/core';
import {Partner} from '../Shared/partner';
import {PartnerService} from '../Services/partner.service';
import {Bank} from '../Shared/bank';
import {BankService} from '../Services/bank.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {City} from '../Shared/City';
import {CityService} from '../Services/city.service';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {

  partner: Partner;
  bank: Bank;
  citys: City[];
  ticketForm = new FormGroup({
    title: new FormControl('' , [ Validators.required]),
  });

  constructor(private partnerService: PartnerService,
              private bankService: BankService,
              private cityService: CityService) {
  }

  ngOnInit(): void {
    this.partner = this.partnerService.thisPartner();
    this.bankService.partnerBank(this.partner.bankId).subscribe((data) => {
      this.bank = data;
      console.log(data);
    });
    this.citys = this.cityService.citys;
  }
}
