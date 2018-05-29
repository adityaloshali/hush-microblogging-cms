import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  domain = environment.domain;
  authority;
  authToken = null;
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
    this.authToken = localStorage.getItem('hushToken'); // Get token and asssign to variable to be used elsewhere
  }

  // Function to check if user is logged in
  loggedIn() {
    let authToken = localStorage.getItem('hushToken');
    // if(authToken){
    //   return true;
    // }else{
    //   return false;
    // }
    if(!this.isTokenExpired(authToken)){
      return true;
    }else{
      return false;
    }
  }

  // Function to check if user is logged in
  loggedInAsWriter() {
    let authToken = localStorage.getItem('hushToken');
    if(!this.isTokenExpired(authToken)){
      if(this.hasAuthority()==="writer"){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  // Function to check if user is logged in
  loggedInAsEditor() {
    let authToken = localStorage.getItem('hushToken');
    if(!this.isTokenExpired(authToken)){
      if(this.hasAuthority()==="editor"){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  hasAuthority(){
    return localStorage.getItem('hushAuthority');
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    //if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }
}
