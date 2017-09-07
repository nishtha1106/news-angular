import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
   constructor() {}
  news:any;
  onEmit(s:any) {
  	this.news=s;
  	console.log(this.news);
  }
}