import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     $(document).ready(function(){
      $("button").click(function(){
        $("#div1").remove();
      });
     });
    
  }

}
