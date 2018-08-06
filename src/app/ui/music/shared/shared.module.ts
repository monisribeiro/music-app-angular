import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from 'src/app/ui/music/shared/services/music.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [MusicService]
})
export class SharedModule { }
