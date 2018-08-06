import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  token: any;
  defaultPath: string;

  constructor(private httpClient: HttpClient) {
    this.defaultPath = environment.lastFmApi;
  }

  setToken(token) {
    sessionStorage.setItem('token', token);
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}
