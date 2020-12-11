import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [ Validators.minLength(6) , Validators.required]),
    confPassword: new FormControl('', [ Validators.minLength(6) , Validators.required])
  });
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
}
