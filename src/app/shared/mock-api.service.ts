import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiService } from './api.service';

const BASE_URL: string = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class MockApiService implements ApiService {

  constructor(private http: Http) {}

  getPosts(): Observable<any> {
    return this.http.get(`${BASE_URL}/posts`)
      .map( res => {
          return res.json();
      });
  }

  postPost(body: any): Observable<any> {

      body = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${BASE_URL}/posts`, body, options)
      .map( res => {
          return res.json();
      });
  }

}