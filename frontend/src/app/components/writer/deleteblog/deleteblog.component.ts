import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WriterService } from '../../../services/writer.service';

@Component({
  selector: 'app-deleteblog',
  templateUrl: './deleteblog.component.html',
  styleUrls: ['./deleteblog.component.css']
})
export class DeleteblogComponent implements OnInit {

  message;
  messageClass;
  foundBlog = false;
  processing = false;
  blog;
  currentParams;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private writerService: WriterService
  ) { }

    // Function to delete blogs
    deleteBlog() {
      this.processing = true; // Disable buttons
      // Function for DELETE request
      this.writerService.deleteBlog(this.currentParams.id).subscribe(data => {
        // Check if delete request worked
        if (!data.success) {
          this.messageClass = 'alert alert-danger'; // Return error bootstrap class
          this.message = data.message; // Return error message
        } else {
          this.messageClass = 'alert alert-success'; // Return bootstrap success class
          this.message = data.message; // Return success message
          // After two second timeout, route to blog page
          setTimeout(() => {
            this.router.navigate(['/writer']); // Route users to blog page
          }, 2000);
        }
      });
    }
  

  ngOnInit() {
    this.currentParams = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
    // Function for GET request to retrieve blog
    this.writerService.getSingleBlog(this.currentParams.id).subscribe(data => {
      // Check if request was successfull
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return bootstrap error class
        this.message = data.message; // Return error message
      } else {
        // Create the blog object to use in HTML
        this.blog = data.blog;
        this.foundBlog = true; // Displaly blog window
      }
    });    
  }

}
