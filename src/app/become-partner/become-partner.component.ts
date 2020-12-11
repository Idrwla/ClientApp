import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

}
