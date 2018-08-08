import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicsListComponent } from './musics-list/musics-list.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { MusicService } from 'src/app/ui/music/shared/services/music.service';
import { SharedModule } from 'src/app/ui/music/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule
  ],
  declarations: [MusicsListComponent]
})
export class ComponentsModule { }
