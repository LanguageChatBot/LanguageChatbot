import { Component, OnInit } from "@angular/core";
import { userService } from "../../services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  userList: Array<any>;
  constructor(public uS: userService) {
    this.uS.getList().subscribe(list => {
      this.userList = list.sort((a, b) => {
        return a.progress > b.progress ? -1 : b.progress > a.progress ? 1 : 0;
      });
    });
  }

  ngOnInit() {}

  getAge(dateString) {
    var today = new Date();
    //console.log(today);
    var birthDate = new Date(dateString);
    //console.log(birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
