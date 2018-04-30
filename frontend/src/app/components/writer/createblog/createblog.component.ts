import { Component, OnInit } from '@angular/core';
import { WriterService } from '../../../services/writer.service';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  constructor(private writerService: WriterService) { }

  saveBlog(blog){
    blog.tags = blog.tags.trim().split(" ");
    console.log(blog);
    this.writerService.createBlog(blog).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
