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

    if (!myToken) {
        const url = 'http://www.last.fm/api/auth/?api_key=cbf697bb2bc061bc9b338001dedad7bd&cb=http://localhost:4200';
        window.location.replace(url);
    } else {
        request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${this.userAuthenticationService.getToken()}`
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
