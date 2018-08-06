import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { MusicsListComponent } from './components/musics-list/musics-list.component';
import { MusicListProviderService } from 'src/app/ui/music/shared/providers/music-list-provider.service';
import { MusicComponent } from 'src/app/ui/music/music.component';
import { SearchMusicsProviderService } from 'src/app/ui/music/shared/providers/search-musics-provider.service';

const appRoutes: Routes = [
  { path: 'musics', component: MusicComponent , children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: MusicsListComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange', resolve: {
        list: MusicListProviderService,
    }},
    { path: 'search', component: MusicsListComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange', resolve: {
        list: SearchMusicsProviderService
    }},
    { path: 'details/:id', component: MusicDetailsComponent },
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
        MusicListProviderService,
        SearchMusicsProviderService
    ]
})
export class MusicRoutingModule { }

export const routedComponents = [MusicsListComponent, MusicDetailsComponent];
