import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  domain = environment.domain;
  authority;
  constructor(
    private http: Http
  ) { }

  // Function to register user accounts
  registerUser(user) {
    return this.http.post(this.domain + 'api/auth/signup', user).map(res => { 
      console.log(res.json());
      this.authority = res.json().authority;
      return res.json(); 
    });
  }

  // Function to register user accounts
  login(user) {
    return this.http.post(this.domain + 'api/auth/signin', user).map(res => { 
      console.log(res.json());
      this.authority = res.json().authority;
      return res.json(); 
    });
  }

}
