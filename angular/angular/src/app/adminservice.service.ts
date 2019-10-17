import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  private baseUrl ="http://localhost:8045/admin/admin/";
  constructor(private http:HttpClient) { }
  getAdmin(username:String):Observable<Admin>{
    return this.http.get<Admin>(`${this.baseUrl}`+username);
  }


}
