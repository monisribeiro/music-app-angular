import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  token: any;
  youtubeToken: any;

  constructor(private httpClient: HttpClient) {

  }

  setToken(token) {
    sessionStorage.setItem('token', token);
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  setYoutubeToken(youtubeToken) {
    sessionStorage.setItem('youtubeToken', youtubeToken);
    this.youtubeToken = youtubeToken;
    this.httpClient.get('https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + youtubeToken).pipe(take(1)).subscribe(
      response => {
      },
      error => {
        sessionStorage.setItem('youtubeToken', 'null');
        this.youtubeToken = undefined;
        return error;
      }
    );
  }

  getYoutubeToken() {
    return this.youtubeToken;
  }
}
