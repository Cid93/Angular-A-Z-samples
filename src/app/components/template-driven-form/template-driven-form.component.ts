import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

	name: string = '';
  @Output() submitted: EventEmitter<string>;

  constructor() {
  	this.submitted = new EventEmitter<string>();
  }

  ngOnInit() {
  }

	send(value: any) {
		this.submitted.emit(value.name);
	}

}
