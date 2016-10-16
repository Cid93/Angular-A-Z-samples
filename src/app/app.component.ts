import { Component, OnInit } from '@angular/core';
import { ApiService, MockApiService } from './shared/';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [{
      provide: ApiService,
      useClass: MockApiService
  }],
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  title:string = 'Hello world ? :)';
  posts: Array<any> = [];
  name: string = 'Damien';

  constructor (private api: ApiService) {}

  ngOnInit () {
      this.api.getPosts()
      .subscribe((apiResponse) => {
          this.posts = apiResponse;
      });
  }

  alert(content: string) {
      alert(content);
  }

  changeName(name: string) {
  	this.name = name;
  }

}