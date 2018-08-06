import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicsListComponent } from './musics-list/musics-list.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { MusicService } from 'src/app/ui/music/shared/services/music.service';
import { SharedModule } from 'src/app/ui/music/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [MusicsListComponent, MusicDetailsComponent]
})
export class ComponentsModule { }
