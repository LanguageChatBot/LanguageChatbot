import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

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

  constructor(public router:Router, public session:SessionService) { }

  ngOnInit() {
    this.user = this.session.user;
    console.log(this.user)
  }

  edit(){
    this.session.edit(this.username, this.language,this.gender,this.age)
    .catch(e => this.error = e)
    .subscribe(result => {if(result === 200)this.router.navigate(['/profile'])});
  }

}
