import { Injectable } from '@angular/core';
import { UserAuthenticationService } from '../authentication/user-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {
  user: any;

  constructor(private userAuthenticationService: UserAuthenticationService) { }

  public init() {
    this.user = this.getUrlParameter('token') && this.getUrlParameter('token')[1] || sessionStorage.getItem('token');
    this.userAuthenticationService.setToken(this.user);
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
}

export function appInitializerServiceFactory(appInitializerService: AppInitializerService): Function {
  return () => appInitializerService.init();
}
