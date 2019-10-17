import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { HttpClient } from '@angular/common/http';
import { Course } from '../course';

@Component({
  selector: 'app-user-completed',
  templateUrl: './user-completed.component.html',
  styleUrls: ['./user-completed.component.css']
})
export class UserCompletedComponent implements OnInit {

  constructor(private httpService:HttpClient,private courseService:CourseService) { }
  course:Course[];
  ngOnInit() {
    this.courseService.getTraining().subscribe(data=>{
      this.course=data;

    });
  }

}
