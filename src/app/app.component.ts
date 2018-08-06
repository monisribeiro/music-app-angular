import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPStatus } from 'src/app/app.http.interceptor';
import { OnInit } from '@angular/core';
import { ChangeDetectorRef } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  httpActivity: boolean;
  title = 'music-app-angular';

  sidenavOpened = false;

  navLinks = [{
    name: 'Dashboard',
    path: 'dashboard'
  }, {
    name: 'Listen',
    path: 'listen'
  }, {
    name: 'Genres',
    path: 'genres'
  }, {
    name: 'Artists',
    path: 'artists'
  }, {
    name: 'Musics',
    path: 'musics'
  }];

  constructor(private httpStatus: HTTPStatus,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.httpStatus.getHttpStatus().subscribe(response => {
      this.httpActivity = response;
      this.cd.detectChanges();
    });
  }
}
