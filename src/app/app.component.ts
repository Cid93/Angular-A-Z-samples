import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  title:string = 'Hello world ? :)';
  name: string = 'Damien';

  constructor () {}

  ngOnInit () {}

}