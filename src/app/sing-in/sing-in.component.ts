import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../Services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required])
  });
  constructor(private userService: UserService, private router: Router) { }
  singIn(): void{
    this.userService.userSingInPost(this.userForm.controls.email.value, this.userForm.controls.password.value)
      .subscribe(() => {
        this.router.navigateByUrl('userDetail');
      });
  }
  ngOnInit(): void {
  }

}
