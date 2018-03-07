import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { Http } from '@angular/http';
import { userService } from '../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  username:string;
  language:string;
  age:string;
  gender:string;
  error:string;

  user:object;
  BASE_URL: string = 'http://localhost:3000';

  constructor(public router:Router, public session:SessionService, public http:Http, public uS:userService) { }

  ngOnInit() {
    this.user = this.session.user;
    console.log(this.user)
  }

  submitForm(id, form){
    console.log(form.value)
    console.log(id)
    this.uS.edit(id, form.value)
    .catch(e => this.error = e)
    .subscribe(status => { if(status === 200) this.router.navigate([`/profile`]) } )
  }
}
