import { Component, OnInit } from '@angular/core';
import { userService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:Array<any>;
  constructor(public uS:userService) { 
    this.uS.getList().subscribe(list => this.userList = list);
  }

  ngOnInit() {
  }

  

}
