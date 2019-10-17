import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl="http://localhost:8045/trainee/trainee-signup"
  constructor(private http:HttpClient) { }
    createUser(User:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,User);
  }

  getUser(email:String):Observable<User>{
    return this.http.get<User>('http://localhost:8045/trainee/trainee/'+email);
  }
  adminUser():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8045/trainee/trainee');
  }
  deleteUser(firstname:string):Observable<Object>{
    return this.http.delete('http://localhost:8045/trainee/trainee/delete/'+firstname);
  }

}
