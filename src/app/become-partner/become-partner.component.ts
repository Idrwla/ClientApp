import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PartnerService} from '../Services/partner.service';
import {UserService} from '../Services/user.service';
import {Partner} from '../Shared/partner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-become-partner',
  templateUrl: './become-partner.component.html',
  styleUrls: ['./become-partner.component.css']
})
export class BecomePartnerComponent implements OnInit {

  partnerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    BIN: new FormControl('', [ Validators.pattern('^[0-9]+$'), Validators.required, Validators.minLength(8)]),
    description: new FormControl('', [Validators.required])
  });
  constructor(private partnerService: PartnerService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }
  become(): void{
    const partner: Partner = {
      id: 0,
      userId: this.userService.getUser().id,
      bin: this.partnerForm.controls.BIN.value,
      description: this.partnerForm.controls.description.value,
      name: this.partnerForm.controls.name.value,
      bankId: 0
    };
    this.partnerService.becomePartner(partner).subscribe( () => {
      this.partnerService.isPartner = true;
      this.router.navigateByUrl('partner');
    });

  }

}
