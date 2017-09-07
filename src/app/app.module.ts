import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NewsSearchService } from './service/news-search.service';
import { SearchlistComponent } from './searchlist/searchlist.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NewsSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
