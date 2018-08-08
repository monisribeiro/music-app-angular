import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserAuthenticationService } from 'src/app/core/authentication/user-authentication.service';
import { map, finalize } from 'rxjs/internal/operators';

@Injectable()
export class HTTPStatus {
  private requestInFlight$: BehaviorSubject<boolean>;

  constructor() {
    this.requestInFlight$ = new BehaviorSubject(false);
  }

  setHttpStatus(inFlight: boolean) {
    this.requestInFlight$.next(inFlight);
  }


  getHttpStatus() {
    return this.requestInFlight$.asObservable();
  }

}



@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private userAuthenticationService: UserAuthenticationService,
              private status: HTTPStatus) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const myToken = this.userAuthenticationService.getToken();
    const myYoutubeToken = this.userAuthenticationService.getYoutubeToken();

    if (!myToken || myToken === 'null') {
        const url = 'http://www.last.fm/api/auth/?api_key=cbf697bb2bc061bc9b338001dedad7bd&cb=http://localhost:4200';
        window.location.replace(url);
    } else if (!myYoutubeToken || myYoutubeToken === 'null') {
      // tslint:disable-next-line:max-line-length
      const url = 'https://accounts.google.com/o/oauth2/auth?client_id=49190339915-p1ie7h0jd5v5955p47e824qelhpe5qn5.apps.googleusercontent.com&redirect_uri=http://localhost:4200&scope=https://www.googleapis.com/auth/youtube&response_type=token';
      window.location.replace(url);
    } else {
        const token = request.url.includes('audioscrobbler') ?
                      this.userAuthenticationService.getToken() : this.userAuthenticationService.getYoutubeToken();
        request = request.clone({
          setHeaders: {
              Authorization: `Bearer ${token}`
          }
        });
        return next.handle(request).pipe(
          map(event => {
            this.status.setHttpStatus(true);
            return event;
          }),
          finalize(() => {
            this.status.setHttpStatus(false);
          })
        );
    }
  }
}
