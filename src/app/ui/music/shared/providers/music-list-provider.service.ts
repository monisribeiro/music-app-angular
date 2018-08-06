import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MusicService } from 'src/app/ui/music/shared/services/music.service';
import { pipe } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicListProviderService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.musicService.getMusicList().pipe(map(
        response => {
          return response.track;
      })
    );
  }

  constructor(private musicService: MusicService) { }
}
