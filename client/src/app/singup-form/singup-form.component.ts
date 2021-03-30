import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent implements OnInit {

  username:string;
  password:string;
  language:string;
  age:string;
  gender:string;
  error:string;
  constructor(public session:SessionService, private router:Router) { }

  ngOnInit() {
  }

  signup(){
    this.session.signup(this.username,this.password,this.language,this.gender,this.age)
    .catch(e => this.error = e)
    .subscribe(result => {
      if(result)this.router.navigate(['/home'])});
  }

}
