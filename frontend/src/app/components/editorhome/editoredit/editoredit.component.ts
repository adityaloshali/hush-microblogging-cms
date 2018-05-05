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
  contentLength = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private editorService: EditorService
  ) { }

  contentChange(searchValue : string ) {  
    let word = searchValue.trim().split(" ");
    this.contentLength = word.length;
  }
  
  updateBlog(blog){
     let id = this.blog._id;
     blog.status = Number(blog.status);
     blog.tags = blog.tags.trim().split(" ");
     console.log(blog);
     this.editorService.updateBlog(id, blog).subscribe(data => {
       console.log(data);
       if (!data.success) {
        console.log(data);
        this.messageClass = 'alert alert-danger'; // Return error class
        this.message = data.message; // Return error message
        } else {
          this.messageClass = 'alert alert-success'; // Return success class
          this.message = data.message; // Return success message
          // Clear form data after two seconds
          setTimeout(() => {
            this.router.navigate(['/editor']);
          }, 2000);
      }
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
