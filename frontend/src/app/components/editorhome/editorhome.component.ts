import { Component, OnInit } from '@angular/core';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-editorhome',
  templateUrl: './editorhome.component.html',
  styleUrls: ['./editorhome.component.css']
})
export class EditorhomeComponent implements OnInit {

  blogPosts;

  constructor(private editorService: EditorService) { }

  getBlogs(){
    this.editorService.getAllBlogs().subscribe(data => {
      this.blogPosts = data.blogs;
      console.log(this.blogPosts);
    });
  }

  ngOnInit() {
    this.editorService.getAllBlogs().subscribe(data => {
      this.blogPosts = data.blogs;
      console.log(this.blogPosts);
    });
  }

}
