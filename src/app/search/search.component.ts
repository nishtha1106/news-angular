import { Component,OnInit,EventEmitter,Input,Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NewsSearchService } from '../service/news-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
news: any=[];
post: any=[];
@Output() onEmit = new EventEmitter<any>();

  constructor(private newsSearch: NewsSearchService) {}
ngOnInit() {

        this.newsSearch.searchNewsMain()
        .subscribe((post )=> { 
          this.post=post.sources;
          
    });
  }

searchNews(searchTerm){
  			this.newsSearch.searchNews(searchTerm)
  			.subscribe((news) => { 
          this.news=news.articles;

          this.onEmit.emit(this.news)
         
  	});
  }

}
