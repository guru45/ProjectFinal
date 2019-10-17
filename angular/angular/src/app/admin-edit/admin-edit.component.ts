import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  
    user :User[]=[];
    constructor(private userService : UserServiceService) { }
  
    ngOnInit() {
      this.userService.adminUser().subscribe(data => {
        this.user = data;
        console.log(this.user);
      })
    }
    deleteUser(firstname:string){
      this.userService.deleteUser(firstname)
      .subscribe(
        data =>{
          console.log(data);

        },
      error=> console.log(error));
    }
  
    
  
  

  }
