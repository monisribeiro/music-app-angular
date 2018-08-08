import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pipe } from 'rxjs';
import { take, map, mergeMap } from 'rxjs/operators';
import { UserAuthenticationService } from 'src/app/core/authentication/user-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ListenService {
  youtubeToken: any;

  constructor(private httpClient: HttpClient,
              private userAuthenticationService: UserAuthenticationService) {

                this.youtubeToken = userAuthenticationService.getYoutubeToken();
               }

  getMusic(name) {
    // tslint:disable-next-line:max-line-length
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${name}&type=video&videoDefinition=high&access_token=${this.youtubeToken}`;

    return this.httpClient.get(youtubeUrl).pipe(
      take(1),
      map((youtubeResponse: any) => {
        return youtubeResponse.items[0];
      })
    );
  }

  getFirstMusic() {
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${environment.apiKey}&format=json&limit=1`;
    return this.httpClient.get(url).pipe(
      take(1),
      map((response: any) => {
        return response.tracks.track[0];
      })
    );

  }
}
