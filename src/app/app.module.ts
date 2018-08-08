import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHttpInterceptor, HTTPStatus } from './app.http.interceptor';
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './core/material/material.module';
import { MusicModule } from './ui/music/music.module';
import { ListenModule } from './ui/listen/listen.module';
import { ArtistsModule } from './ui/artists/artists.module';
import { UserAuthenticationService } from 'src/app/core/authentication/user-authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInitializerService, appInitializerServiceFactory } from 'src/app/core/app-initializer/app-initializer.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MusicModule,
    ListenModule,
    ArtistsModule,
    ListenModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    UserAuthenticationService,
    HTTPStatus,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerServiceFactory,
      deps: [AppInitializerService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
