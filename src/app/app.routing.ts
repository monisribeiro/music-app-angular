import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { ListenComponent } from './ui/listen/listen.component';
import { GenresComponent } from './ui/genres/genres.component';
import { ArtistsComponent } from './ui/artists/artists.component';
import { MusicComponent } from './ui/music/music.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listen', component: ListenComponent },
  { path: 'genres', component: GenresComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
