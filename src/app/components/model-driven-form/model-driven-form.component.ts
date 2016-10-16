import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  form: FormGroup;
  @Output() submitted: EventEmitter<string>;

  constructor(private formBuilder: FormBuilder) {
  	this.submitted = new EventEmitter<string>();
  }

  ngOnInit() {
  	this.form = this.formBuilder.group({
      name: ['Florian', [Validators.required]]
  	});
  }

  send() {
  	this.submitted.emit(this.form.controls['name'].value);
  }
}
