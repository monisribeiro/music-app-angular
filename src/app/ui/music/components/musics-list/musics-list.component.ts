import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/ui/music/shared/services/music.service';

@Component({
  selector: 'app-musics-list',
  host: {
    class: 'column-flex'
  },
  templateUrl: './musics-list.component.html',
  styleUrls: ['./musics-list.component.css']
})
export class MusicsListComponent implements OnInit {
  musicsSize: any;
  displayedColumns = ['play', 'name', 'artist', 'listeners', 'duration'];
  dataSource: any;

  constructor(private activatedRoute: ActivatedRoute,
              private musicService: MusicService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(event => {
      this.dataSource = event.list;
      this.musicsSize = this.musicService.getMusicsListSize();
    });
  }

  changePage(event) {
    const api = this.activatedRoute.routeConfig.path === 'list' ?
              this.musicService.getMusicList(event.pageIndex * event.pageSize)
              : this.musicService.searchMusicList(this.activatedRoute.snapshot.queryParams.search, event.pageIndex * event.pageSize);

    api.subscribe(
      response => {
        this.dataSource = response.track;
      }
    );
  }

}
