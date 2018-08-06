import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArtistsComponent } from './artists.component';
import { MaterialModule } from '../../core/material/material.module';
import { SharedModule } from 'src/app/ui/artists/shared/shared.module';
import { ArtistsRoutingModule } from 'src/app/ui/artists/artists.routing';
import { ComponentsModule } from 'src/app/ui/artists/components/components.module';
import { GlobalSharedModule } from 'src/app/ui/shared/shared.module';


@NgModule({
  declarations: [
    ArtistsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    SharedModule,
    ArtistsRoutingModule,
    ComponentsModule,
    GlobalSharedModule
  ],
  providers: [],
  bootstrap: [ArtistsComponent]
})
export class ArtistsModule { }
