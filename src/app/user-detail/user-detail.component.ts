import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import {User} from '../Shared/user';
import {Router} from '@angular/router';
import {PartnerService} from '../Services/partner.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(private userService: UserService,
              private router: Router,
              private partner: PartnerService) { }
  ngOnInit(): void {
    this.user = this.userService.getUser();
    console.log(this.user.firstName);
    this.partner.partner();
  }
  userProf(): User{
    return this.userService.getUser();
  }
  logOut(): void{
    this.userService.logOut();
    this.router.navigateByUrl('');
  }
}
