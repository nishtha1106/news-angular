import { Component, OnInit,EventEmitter, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { NewsSearchService } from '../service/news-search.service';
@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent {
  constructor(private newsService: NewsSearchService ) { }
  @Input('news') news:any;

}
