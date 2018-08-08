import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artists',
  host: {
    class: 'column-flex'
  },
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  searchCriteria: any;
  screenType: any;

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
      this.router.navigate(['/artists']);
    } else {
      this.router.navigate(['/artists/search'], {queryParams: {search: event}});
    }
  }
}
