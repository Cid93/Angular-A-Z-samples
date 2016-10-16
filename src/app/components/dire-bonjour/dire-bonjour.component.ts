import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dire-bonjour',
  templateUrl: 'dire-bonjour.component.html',
  styleUrls: ['dire-bonjour.component.css']
})
export class DireBonjourComponent implements OnInit {

  @Input('nom') inputPropriete: string;
  @Output('clique') outputEvenement: EventEmitter<string>;

  constructor() {
      this.outputEvenement = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  clicked(nom: string) {
      this.outputEvenement.emit(nom);
  }

}