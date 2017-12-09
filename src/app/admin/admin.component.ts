import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor( private Users :UsersService) { }
  private UserList:admins[];

  ngOnInit() {
    // call service users
    this.Users.getAdmin().subscribe((response) => {
        console.log('response is ', response);
        this.UserList = response;
    });
  }

}

interface admins {
  id: number;
  username: string;
  email: string;
  name: string;
  tel: string;
  level: string;
  active: string;
  created_at: string;
  updated_at: string;
}