import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { NewsSearchService } from '../service/news-search.service';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
	data: any[];
  constructor(private newsService: NewsSearchService) { }
  @Input('news') fav:any;
  ngOnInit() {
  }

favorite() {
	this.newsService.favorite()
	.subscribe(res => {
		this.data=res
		console.log(this.data)
	})

}

delete(data:any) {
	this.newsService.delete(data)
	.subscribe(res =>{
		this.data= res
		console.log(this.data)
	})
}

}
