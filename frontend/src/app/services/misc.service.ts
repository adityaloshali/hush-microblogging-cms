import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MiscService {

  options;
  domain = this.authService.domain;

  constructor(private authService: AuthService,
    private http: Http) { }

  createAuthenticationHeaders() {
    this.authService.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authService.authToken // Attach token
      })
    });
  }

  createCategory(blog) {
    this.createAuthenticationHeaders(); // Create headers
    console.log(blog);
    return this.http.post(this.domain + 'api/categories', blog, this.options).map(res => { 
      console.log(res.json());
      return res.json(); 
    });
  }

  getCategories(){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'api/categories', this.options).map(res => { 
      console.log(res.json());
      return res.json(); 
    });
  }

  getAWSKeys(){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'api/awskeys', this.options).map(res => { 
      return res.json(); 
    });
  }
}
