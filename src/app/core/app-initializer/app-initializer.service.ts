import { Injectable } from '@angular/core';
import { UserAuthenticationService } from '../authentication/user-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {
  lastFm: any;
  youtube: any;

  constructor(private userAuthenticationService: UserAuthenticationService) { }

  public init() {
    this.lastFm = this.getUrlParameter('token') && this.getUrlParameter('token')[1] || sessionStorage.getItem('token');
    this.userAuthenticationService.setToken(this.lastFm);
    this.youtube = this.getUrlToken('access_token') && this.getUrlToken('access_token')[1]
                    || sessionStorage.getItem('youtubeToken');
    this.userAuthenticationService.setYoutubeToken(this.youtube);
  }

  private getUrlParameter(sParam) {
    return decodeURIComponent(window.location.search.substring(1)).split('&')
    .map((v) => {
      console.log(v);
      return v.split('=');
    } )
    .filter((v) => {
      return (v[0] === sParam) ? true : false;
    })[0];
  }

  private getUrlToken(sParam) {
    return decodeURIComponent(window.location.hash.substring(1)).split('&')
    .map((v) => {
      console.log(v);
      return v.split('=');
    } )
    .filter((v) => {
      return (v[0] === sParam) ? true : false;
    })[0];
  }
}

export function appInitializerServiceFactory(appInitializerService: AppInitializerService): Function {
  return () => appInitializerService.init();
}
