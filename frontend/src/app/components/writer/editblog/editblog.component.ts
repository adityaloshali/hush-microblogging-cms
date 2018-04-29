import { Component, OnInit } from '@angular/core';
import { WriterService } from '../../../services/writer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {

  message;
  messageClass;
  blog = { "_id" : null};
  processing = false;
  currentParams;
  loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private writerService: WriterService
  ) { }

  updateBlog(blog){
     let id = this.blog._id;
     blog.status = Number(blog.status);
     this.writerService.updateBlog(id, blog).subscribe(data => {
       console.log(data);
     });
  }

  ngOnInit() {
    this.currentParams = this.activatedRoute.snapshot.params; // When component loads, grab the id
    // Function to GET current blog with id in params
    this.writerService.getSingleBlog(this.currentParams.id).subscribe(data => {
      // Check if GET request was success or not
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = data.message; // Set error message
      } else {
        this.blog = data.blog; // Save blog object for use in HTML
        
        this.loading = false; // Allow loading of blog form
      }
    });        
  }

}
