import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsSearch {
	title = 'app';

  constructor(private http: Http) { }

	searchNews(searchTerm: HTMLInputElement ){
  	return this.http
  	.get('https://newsapi.org/v1/articles?source='+searchTerm.value+'&sortBy=top&apiKey=54879931472846699a71aed1966a626d')
  	.map(res=>res.json());
  }
  	
}
