import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {Location} from '@angular/common';
import {UserService} from '../Services/user.service';
import {User} from '../Shared/user';

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
  constructor(private router: Router, private userService: UserService) { }
  ngOnInit(): void {
  }
  singUp(): boolean{
    if ( this.userForm.controls.password.value !== this.userForm.controls.confPassword.value){
      return false;
    }
    const user: User = {
      firstName: this.userForm.controls.firstName.value,
      lastName: this.userForm.controls.lastName.value,
      email: this.userForm.controls.email.value,
      password: this.userForm.controls.password.value
    };
    this.userService.userPost(user).subscribe( () => {
      this.router.navigateByUrl('userDetail');
    });
  }
}
