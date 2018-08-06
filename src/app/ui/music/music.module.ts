import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MusicComponent } from './music.component';
import { ComponentsModule } from './components/components.module';
import { MusicRoutingModule } from './music.routing';
import { MaterialModule } from '../../core/material/material.module';
import { SharedModule } from 'src/app/ui/music/shared/shared.module';
import { GlobalSharedModule } from 'src/app/ui/shared/shared.module';


@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    ComponentsModule,
    MusicRoutingModule,
    SharedModule,
    GlobalSharedModule
  ],
  providers: []
})
export class MusicModule { }
