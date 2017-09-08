import { Component, OnInit,EventEmitter, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { NewsSearchService } from '../service/news-search.service';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent {
	favourite:any={};
  constructor(private newsService: NewsSearchService ) { }
  @Input('news') news:any;

add(detail:any) {
	this.favourite={
		"title": detail.title,
		"description": detail.description,
		"urlToImage": detail.urlToImage
	}
	this.newsService.add(this.favourite).subscribe((data)=>{
		console.log(data)
	})
}
}
