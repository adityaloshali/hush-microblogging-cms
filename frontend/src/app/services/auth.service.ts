import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  domain = environment.domain;
  authority;
  authToken;
  userName;
  userId;
  options;
  
  constructor(
    private http: Http
  ) { }

  // Function to register user accounts
  registerUser(user) {
    return this.http.post(this.domain + 'api/auth/signup', user).map(res => { 
      console.log(res.json());
      return res.json(); 
    });
  }

  // Function to login to user accounts
  login(user) {
    return this.http.post(this.domain + 'api/auth/signin', user).map(res => { 
      console.log(res.json());
      return res.json(); 
    });
  }

  // Function to logout
  logout() {
    this.authToken = null; // Set token to null
    this.userName = null; // Set user to null
    this.authority = null;
    this.userId = null;
    localStorage.clear(); // Clear local storage
  }


  // Function to store user's data in client local storage
  storeUserData(token, username, authority, id) {
    localStorage.setItem('hushToken', token); // Set token in local storage
    localStorage.setItem('hushUser', username); // Set user in local storage as string
    localStorage.setItem('hushAuthority', authority);
    localStorage.setItem('hushUserId', id);
    this.authToken = token; // Assign token to be used elsewhere
    this.userName = username; // Set user to be used elsewhere
    this.authority = authority;
    this.userId = id;
  }

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      })
    });
  }

  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('hushToken');; // Get token and asssign to variable to be used elsewhere
  }

  // Function to check if user is logged in
  loggedIn() {
    return tokenNotExpired();
  }
}
