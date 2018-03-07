import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class userService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}
    
  getList() {
    return this.http.get(`${this.BASE_URL}/api/user`)
      .map((res) => res.json());
  }
  
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/user/${id}`)
      .map((res) => res.json());
  }
  
  edit(id,form){
    return this.http.put(`${this.BASE_URL}/api/user/${id}`, form)
      .map((res) => res.json());
  }
}