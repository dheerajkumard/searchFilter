import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  resp: any;

  searchText: any;
  displayNames = [];

  constructor(public user: UsersService) { }

  ngOnInit(): void {
  }

  onGetUsers() {
    this.user.onGet().subscribe((responsedata) => {
      this.resp = responsedata;
      this.displayNames = this.resp;
    })
  }

  searchForName() {
    this.displayNames = this.resp.filter( data => data.login.includes(this.searchText));
  }

}
