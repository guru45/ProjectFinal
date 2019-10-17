import { Component, OnInit } from '@angular/core';


import { SearchService } from '../search.service';
import { Search } from '../search';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})

export class UserSearchComponent implements OnInit {
  
  constructor(private httpService:HttpClient,private searchService:SearchService) { }
  search1:Search[];
  ngOnInit() {
    this.searchService.findAll().subscribe(data=>{
      this.search1=data;

    });
  }

}
