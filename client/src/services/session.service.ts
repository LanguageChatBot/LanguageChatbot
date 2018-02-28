import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface User {
  username:string,
  password:string
}

@Injectable()
export class SessionService {

  BASEURL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  private user:User;

  getUser(){
    return this.user;
  }
  private configureUser(set=false){
    return (user) => {
      if(set){
        this.user = user;
        console.log(`Setting user, welcome ${this.user.username}`)
      }else{
        console.log(`bye bye ${this.user.username}`)
        this.user = null
      }
      return user;
    }
  }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  signup(username:string, password:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/api/auth/signup`, {username,password}, this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }

  login(username:string, password:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/api/auth/login`, {username,password},this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }

  logout():Observable<any>{
    return this.http.get(`${this.BASEURL}/api/auth/logout`,this.options)
      .map(res => res.json())
      .map(this.configureUser(false))
      .catch(this.handleError);
  }

  isLoggedIn():Observable<any> {
    return this.http.get(`${this.BASEURL}/api/auth/loggedin`,this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }
}