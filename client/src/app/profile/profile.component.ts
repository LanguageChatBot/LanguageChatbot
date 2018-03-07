import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../../services/session.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: object;

  constructor(public router: Router, public session: SessionService) {}

  ngOnInit() {
    this.user = this.session.user;
    if (this.session.user == undefined) {
      this.router.navigate(["/login"]);
    }
  }

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

  getCreate(date){
    return date.slice(0,10)
  }

}
