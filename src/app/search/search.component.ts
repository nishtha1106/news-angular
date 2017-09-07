import { Component,OnInit } from '@angular/core';
import { NewsSearchService } from '../service/news-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
news: any=[];
post: any=[];
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
         
  	});
  }

}
/*@Output: name, type <any> emit(data)
"getdata($event)" -> html->ts */