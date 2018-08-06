import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  animations: [
    trigger('slideInOut',  [
      state('true', style({width: '180px'})),
      state('false', style({width: '20px'})),
      transition('true => false', animate('200ms ease-in')),
      transition('true => false', animate('200ms ease-in'))
    ])
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  showSearch = false;
  searchCriteria = '';

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSearch = new EventEmitter<string>();

  ngOnInit() {
  }

  search() {
    this.showSearch = false;
    this.onSearch.emit(this.searchCriteria);
  }

}
