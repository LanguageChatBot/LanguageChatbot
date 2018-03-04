import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user:object;

  constructor(public router:Router, public session:SessionService) { }

  ngOnInit() {
    this.user = this.session.user;
  }

}
