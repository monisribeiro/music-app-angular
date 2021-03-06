import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { pipe } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ArtistsService } from 'src/app/ui/artists/shared/service/artists.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistsListProviderService  implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.artistService.getArtistList().pipe(map(
        response => {
          return response;
      })
    );
  }

  constructor(private artistService: ArtistsService) { }
}
