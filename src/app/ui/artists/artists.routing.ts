import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { ArtistsListProviderService } from 'src/app/ui/artists/shared/providers/artists-list-provider.service';
import { ArtistsComponent } from 'src/app/ui/artists/artists.component';
import { SearchArtistProviderService } from 'src/app/ui/artists/shared/providers/search-artist-provider.service';

const appRoutes: Routes = [
  { path: 'artists', component: ArtistsComponent , children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ArtistsListComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange', resolve: {
        list: ArtistsListProviderService,
    }},
    { path: 'search', component: ArtistsListComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange', resolve: {
        list: SearchArtistProviderService
    }},
    { path: 'details/:id', component: ArtistDetailsComponent },
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
    providers: [
        ArtistsListProviderService,
        SearchArtistProviderService
    ]
})
export class ArtistsRoutingModule { }

export const routedComponents = [ArtistsListComponent, ArtistDetailsComponent];
