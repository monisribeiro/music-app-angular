import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-music',
  host: {
    class: 'column-flex'
  },
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  searchCriteria: any;
  screenType: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.screenType = this.activatedRoute.firstChild.snapshot.routeConfig.path;
        this.searchCriteria = this.activatedRoute.firstChild.snapshot.queryParams.search;
      }
    });
  }

  search(event) {
    if (!event || event === '') {
      this.router.navigate(['/musics']);
    } else {
      this.router.navigate(['/musics/search'], {queryParams: {search: event}});
    }
  }

}
