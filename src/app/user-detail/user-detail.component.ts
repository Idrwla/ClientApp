import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import {User} from '../Shared/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

}
