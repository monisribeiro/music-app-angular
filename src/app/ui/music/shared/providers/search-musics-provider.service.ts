import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MusicService } from 'src/app/ui/music/shared/services/music.service';
import { pipe } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchMusicsProviderService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.musicService.searchMusicList(route.queryParams.search).pipe(map(
        response => {
          return response.track;
      })
    );
  }

  constructor(private musicService: MusicService) { }
}