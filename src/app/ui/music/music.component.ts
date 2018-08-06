import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  host: {
    class: 'column-flex'
  },
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(event) {
    if (!event || event === '') {
      this.router.navigate(['/musics']);
    } else {
      this.router.navigate(['/musics/search'], {queryParams: {search: event}});
    }
  }

}
