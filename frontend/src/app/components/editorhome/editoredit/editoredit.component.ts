import { Component, OnInit } from '@angular/core';
import { EditorService } from '../../../services/editor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editoredit',
  templateUrl: './editoredit.component.html',
  styleUrls: ['./editoredit.component.css']
})
export class EditoreditComponent implements OnInit {

  message;
  messageClass;
  blog = { "_id" : null};
  processing = false;
  currentParams;
  loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private editorService: EditorService
  ) { }

  updateBlog(blog){
     let id = this.blog._id;
     blog.status = Number(blog.status);
     blog.tags = blog.tags.trim().split(" ");
     console.log(blog);
     this.editorService.updateBlog(id, blog).subscribe(data => {
       console.log(data);
     });
  }

  ngOnInit() {
    this.currentParams = this.activatedRoute.snapshot.params; // When component loads, grab the id
    // Function to GET current blog with id in params
    this.editorService.getSingleBlog(this.currentParams.id).subscribe(data => {
      // Check if GET request was success or not
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = data.message; // Set error message
      } else {
        console.log(data.blog);
        data.blog.tags = data.blog.tags.join(" ");
        console.log(data.blog);
        this.blog = data.blog; // Save blog object for use in HTML
        this.loading = false; // Allow loading of blog form
      }
    });        
  }

}
