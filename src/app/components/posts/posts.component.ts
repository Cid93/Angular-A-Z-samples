import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

	posts: Array<any> = [];

  constructor(private api: ApiService) { }

  ngOnInit () {
      this.api.getPosts()
      .subscribe((apiResponse) => {
          this.posts = apiResponse;
      });
  }

}
