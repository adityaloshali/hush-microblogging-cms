import { Component, OnInit } from '@angular/core';
import { WriterService } from '../../../services/writer.service';
import { MiscService } from '../../../services/misc.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  messageClass;
  message;
  contentLength = 0;
  categories = ["career","employment","upskilling","management"];
  file: any;
  imageUrl = "http://via.placeholder.com/350x250";
  progress:any = false;
  window: any = window;
  AWS: any = this.window.AWS;

  constructor(
    private writerService: WriterService,
    private miscService: MiscService,
    private authService: AuthService,
    private router: Router) { }

  contentChange(searchValue : string ) {  
    let word = searchValue.trim().split(" ");
    this.contentLength = word.length;
  }  

  saveBlog(blog){
    blog.tags = blog.tags.trim().split(" ");
    console.log(this.imageUrl);
    blog.imageUrl = this.imageUrl;
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

  fileEvent(fileInput: any){
    var files = fileInput.target.files;
    var file  = files[0];
    this.file = file;
  }

  awsUpload(){
    console.log(this.file);
    if(this.file){
      this.miscService.getAWSKeys().subscribe(data => {
        this.AWS.config.accessKeyId = data.keys.accessKeyId;
        this.AWS.config.secretAccessKey = data.keys.secretAccessKey;
  
        var bucket = new this.AWS.S3({region: 'ap-south-1',params: {Bucket: 'hush-microblogs'}});
  
        var userID = this.authService.getUserId();
        var key = userID + "/" +this.file.name;
        
        var params = {Key: key, Body: this.file, Bucket: 'hush-microblogs'};
        
        // var elem = document.getElementById("myBar");

        bucket.upload(params).on('httpUploadProgress', (evt) => {
          let prog = ((parseInt(evt.loaded) * 100) / evt.total).toFixed(0);
          this.progress = prog;
          // elem.style.width = prog + '%';
          // elem.innerHTML =  prog + '% uploaded';
        }).send((err, data) => {
          console.log(err, data);
          this.imageUrl = data.Location;
          setTimeout(() => {
            this.progress = false;
          }, 2000);  
        });
      });
    }
  }

  ngOnInit() {
    this.miscService.getCategories().subscribe(data => {
      this.categories = data.categories;
    });
  }

}
