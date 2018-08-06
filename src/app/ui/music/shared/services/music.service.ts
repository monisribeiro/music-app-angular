import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  musicsSize: any;

  constructor(private httpClient: HttpClient) { }

  getMusicList(page?) {
    // tslint:disable-next-line:max-line-length
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${environment.apiKey}&format=json&limit=15${page ? '&page=' + page : ''}`;
    return this.httpClient.get(url).pipe(
      take(1),
      map((response: any) => {
        this.musicsSize = response.tracks['@attr'].total;
        return response.tracks;
      })
    );
  }

  getMusicsListSize() {
    return this.musicsSize;
  }

  searchMusicList(criteria, page?) {
    // tslint:disable-next-line:max-line-length
    const url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${criteria}&api_key=${environment.apiKey}&format=json&limit=15${page ? '&page=' + page : ''}`;
    return this.httpClient.get(url).pipe(
      take(1),
      map((response: any) => {
        this.musicsSize = response.results['opensearch:totalResults'];
        return response.results.trackmatches;
      })
    );
  }
}
