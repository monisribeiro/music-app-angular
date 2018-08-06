import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListenComponent } from './listen.component';
import { MaterialModule } from '../../core/material/material.module';


@NgModule({
  declarations: [
    ListenComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [ListenComponent]
})
export class ListenModule { }
