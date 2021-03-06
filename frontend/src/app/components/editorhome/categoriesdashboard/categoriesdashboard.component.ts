import { Component, OnInit } from '@angular/core';
import { MiscService } from '../../../services/misc.service';

@Component({
  selector: 'app-categoriesdashboard',
  templateUrl: './categoriesdashboard.component.html',
  styleUrls: ['./categoriesdashboard.component.css']
})
export class CategoriesdashboardComponent implements OnInit {

  messageClass;
  message;

  constructor(private miscService: MiscService) { }
  
  addCategory(category){
    category.category = category.category.trim();
    this.miscService.createCategory(category).subscribe(data => {
      console.log(data);
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error class
        this.message = data.message; // Return error message
      } else {
        this.messageClass = 'alert alert-success'; // Return success class
        this.message = data.message; // Return success message
      }
    });
  }

  ngOnInit() {
  }

}
