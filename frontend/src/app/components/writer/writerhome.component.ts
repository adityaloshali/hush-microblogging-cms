import { Component, OnInit } from '@angular/core';
import { WriterService } from '../../services/writer.service';

@Component({
  selector: 'app-writerhome',
  templateUrl: './writerhome.component.html',
  styleUrls: ['./writerhome.component.css']
})
export class WriterhomeComponent implements OnInit {

  blogPosts;
  loadingBlogs = false;

  constructor(private writerService: WriterService) { }

  // Reload blogs on current page
  reloadBlogs() {
    this.loadingBlogs = true; // Used to lock button
    this.getBlogs(); // Add any new blogs to the page
    setTimeout(() => {
      this.loadingBlogs = false; // Release button lock after four seconds
    }, 4000);
  }

  getBlogs(){
    this.writerService.getAllBlogs().subscribe(data => {
      this.blogPosts = data.blogs;
      console.log(this.blogPosts);
    });
  }

  ngOnInit() {
    this.writerService.getAllBlogs().subscribe(data => {
      this.blogPosts = data.blogs;
      console.log(this.blogPosts);
    });
  }

}
