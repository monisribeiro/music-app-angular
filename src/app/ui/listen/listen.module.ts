import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListenComponent } from './listen.component';
import { MaterialModule } from '../../core/material/material.module';
import { ComponentsModule } from 'src/app/ui/listen/components/components.module';
import { GlobalSharedModule } from 'src/app/ui/shared/shared.module';
import { SharedModule } from 'src/app/ui/listen/shared/shared.module';
import { ListenRoutingModule } from 'src/app/ui/listen/listen.routing';


@NgModule({
  declarations: [
    ListenComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    ComponentsModule,
    SharedModule,
    GlobalSharedModule,
    ListenRoutingModule
  ],
  providers: [],
  bootstrap: [ListenComponent]
})
export class ListenModule { }
