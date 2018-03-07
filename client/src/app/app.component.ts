import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Languinator';
  error:string;

  constructor(public session:SessionService, private router:Router) { 
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe(result => {this.router.navigate(['/home'])});
  }
}
