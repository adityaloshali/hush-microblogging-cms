import { Component, OnInit } from '@angular/core';
import { WriterService } from '../../../services/writer.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  messageClass;
  message;

  constructor(
    private writerService: WriterService,
    private router: Router) { }

  saveBlog(blog){
    blog.tags = blog.tags.trim().split(" ");
    console.log(blog);
    this.writerService.createBlog(blog).subscribe(data => {
      console.log(data);
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error class
        this.message = data.message; // Return error message
      } else {
        this.messageClass = 'alert alert-success'; // Return success class
        this.message = data.message; // Return success message
        // Clear form data after two seconds
        setTimeout(() => {
          this.router.navigate(['/writer']);
        }, 2000);
      }
    });
  }

  ngOnInit() {
  }

}
