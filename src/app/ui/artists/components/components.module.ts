import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ArtistsListComponent, ArtistDetailsComponent]
})
export class ComponentsModule { }
