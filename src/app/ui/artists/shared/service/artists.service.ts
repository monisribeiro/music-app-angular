import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  artistsSize: any;

  constructor(private httpClient: HttpClient) { }

  getArtistList(page?) {
    // tslint:disable-next-line:max-line-length
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${environment.apiKey}&format=json&limit=8${page ? '&page=' + page : ''}`;
    return this.httpClient.get(url).pipe(
      take(1),
      map((response: any) => {
        this.artistsSize = response.artists['@attr'].total;
        return response.artists.artist.map(artist => {
          artist.image_small = artist.image[0]['#text'];
          artist.image = artist.image[3]['#text'];
          return artist;
        });
      })
    );
  }

  getArtistsListSize() {
    return this.artistsSize;
  }

  searchArtistList(criteria, page?) {
    // tslint:disable-next-line:max-line-length
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${criteria}&api_key=${environment.apiKey}&format=json&limit=8${page ? '&page=' + page : ''}`;
    return this.httpClient.get(url).pipe(
      take(1),
      map((response: any) => {
        this.artistsSize = response.results['opensearch:totalResults'];
        return response.results.artistmatches.artist.map(artist => {
          artist.image_small = artist.image[0]['#text'];
          artist.image = artist.image[3]['#text'];
          return artist;
        });
      })
    );
  }
}
