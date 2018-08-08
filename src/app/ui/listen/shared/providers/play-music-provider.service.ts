import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ListenService } from 'src/app/ui/listen/shared/services/listen.service';

@Injectable({
  providedIn: 'root'
})
export class PlayMusicProviderService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (!route.queryParams.name) {
      this.listenService.getFirstMusic().subscribe(response => {
        this.router.navigate(['/listen'], {queryParams: {name: response.artist.name + ' - ' + response.name}});
      });
      return {id: {videoId: undefined}};
    }
    return this.listenService.getMusic(route.queryParams.name).pipe(map(
        response => {
            return response;
      }));
  }

  constructor(private listenService: ListenService, private router: Router) { }
}
