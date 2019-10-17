import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Search } from './search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private userurl:string;
  constructor(private http:HttpClient) {
    this.userurl="http://localhost:8045/trainer/trainers"
   }

   public findAll():Observable<Search[]>{
     return this.http.get<Search[]>(this.userurl);
   }
}
