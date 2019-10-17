import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

 
  constructor(private http:HttpClient) { }
    addTraining(Training:Object):Observable<Object>{
    return this.http.post('http://localhost:8045/training/add-course',Training);
  }
  getTraining():Observable <Course[]>{
    return this.http.get<Course[]>('http://localhost:8045/training/coursedetails');
  }

}
