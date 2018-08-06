import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsService } from 'src/app/ui/artists/shared/service/artists.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ArtistsService]
})
export class SharedModule { }
