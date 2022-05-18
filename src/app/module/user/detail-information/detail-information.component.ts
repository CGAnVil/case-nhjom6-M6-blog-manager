import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../model/user';
import {error} from 'protractor';

@Component({
  selector: 'app-detail-information',
  templateUrl: './detail-information.component.html',
  styleUrls: ['./detail-information.component.css']
})
export class DetailInformationComponent implements OnInit {
  user: User = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserById(1);
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
      console.log('Get user success');
    }, error => {
      console.log('Get user fail');
    })
  }
}
