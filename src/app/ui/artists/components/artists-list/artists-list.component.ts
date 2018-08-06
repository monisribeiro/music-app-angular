import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from 'src/app/ui/artists/shared/service/artists.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {
  artistsList: any;
  artistsSize: any;
  constructor(private activatedRoute: ActivatedRoute,
              private artistService: ArtistsService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(event => {
      this.artistsList = event.list;
      this.artistsSize = this.artistService.getArtistsListSize();
    });
  }

  changePage(event) {
    const api = this.activatedRoute.routeConfig.path === 'list' ?
              this.artistService.getArtistList(event.pageIndex * event.pageSize)
              : this.artistService.searchArtistList(this.activatedRoute.snapshot.queryParams.search, event.pageIndex * event.pageSize);

    api.subscribe(
      response => {
        this.artistsList = response;
      }
    );
  }

  getUrl(url) {
    return `url(${url})`;
  }
}
