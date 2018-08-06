import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GenresComponent } from './genres.component';
import { MaterialModule } from '../../core/material/material.module';


@NgModule({
  declarations: [
    GenresComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [GenresComponent]
})
export class GenresModule { }
