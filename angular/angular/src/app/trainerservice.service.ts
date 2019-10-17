import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './trainer';


@Injectable({
  providedIn: 'root'
})
export class TrainerserviceService {
  private baseUrl="http://localhost:8045/trainer/trainer-signup"
  constructor(private http:HttpClient) {}
  createMentor (Trainer:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,Trainer)
    
  }
  getTrainer(email:String):Observable<Trainer>{
    return this.http.get<Trainer>(`${this.baseUrl}`+email);
  }

}