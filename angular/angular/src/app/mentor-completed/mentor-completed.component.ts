import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mentor-completed',
  templateUrl: './mentor-completed.component.html',
  styleUrls: ['./mentor-completed.component.css']
})
export class MentorCompletedComponent implements OnInit {

  constructor(private httpService:HttpClient,private courseService:CourseService) { }
  course:Course[];
  ngOnInit() {
    this.courseService.getTraining().subscribe(data=>{
      this.course=data;

    });
  }


}
