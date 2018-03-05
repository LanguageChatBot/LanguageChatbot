import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:object;

  constructor(public router:Router, public session:SessionService) { }

  ngOnInit() {
    this.user = this.session.user;
    if(this.session.user==undefined){
      this.router.navigate(['/login'])
    }
  }

}
