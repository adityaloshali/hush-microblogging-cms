import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class WriterService {
  options;
  domain = this.authService.domain;

  constructor(private authService: AuthService,
    private http: Http
  ) {}

    // Function to create headers, add token, to be used in HTTP requests
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

  createBlog(blog) {
    this.createAuthenticationHeaders(); // Create headers
    console.log(blog);
    return this.http.post(this.domain + 'api/writer/new', blog, this.options).map(res => { 
      console.log(res.json());
      return res.json(); 
    });
  }

  getSingleBlog(id){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'api/writer/'+ id , this.options).map(res => { 
      console.log(res.json());
      return res.json(); 
    });
  }

  updateBlog(id, blog){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + 'api/writer/'+ id , blog , this.options).map(res => { 
      console.log(res.json());
      return res.json(); 
    });
  }

  // Function to get all blogs from the database
  getAllBlogs() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'api/writer', this.options).map(res => {
     console.log(res.json());
     return res.json();
    });
  }

  deleteBlog(id){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.delete(this.domain + 'api/writer/'+ id , this.options).map(res => { 
      console.log(res.json());
      return res.json(); 
    });
  }

}
