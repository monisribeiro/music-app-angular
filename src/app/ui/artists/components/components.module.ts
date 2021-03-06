import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [ArtistsListComponent]
})
export class ComponentsModule { }
