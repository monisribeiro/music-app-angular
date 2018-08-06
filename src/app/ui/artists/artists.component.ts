import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  host: {
    class: 'column-flex'
  },
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  search(event) {
    if (!event || event === '') {
      this.router.navigate(['/artists']);
    } else {
      this.router.navigate(['/artists/search'], {queryParams: {search: event}});
    }
  }
}
