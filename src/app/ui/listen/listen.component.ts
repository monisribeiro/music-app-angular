import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listen',
  host: {
    class: 'column-flex'
  },
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {
  search: any;
  video: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(event => {
      this.video = event.video;
    });
    this.activatedRoute.queryParams.subscribe(event => {
      this.search = event.name;
    });
  }

}
