import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [PlayerComponent],
  exports: [PlayerComponent]
})
export class ComponentsModule { }
