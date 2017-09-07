import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { NewsSearch } from './news-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewsSearch]
})
export class AppComponent{
 news: any=[];
 

  constructor(private newsSearch: NewsSearch) {}

  searchNews(searchTerm){
  			this.newsSearch.searchNews(searchTerm)
  			.subscribe(news => { this.news=news;
  	})
  }

}