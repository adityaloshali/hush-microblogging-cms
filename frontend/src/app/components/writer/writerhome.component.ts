import { Component, OnInit } from '@angular/core';
import { WriterService } from '../../services/writer.service';

@Component({
  selector: 'app-writerhome',
  templateUrl: './writerhome.component.html',
  styleUrls: ['./writerhome.component.css']
})
export class WriterhomeComponent implements OnInit {

  blogPosts;

  constructor(private writerService: WriterService) { }

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
