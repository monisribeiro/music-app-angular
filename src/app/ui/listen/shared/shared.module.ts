import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListenService } from 'src/app/ui/listen/shared/services/listen.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ListenService]
})
export class SharedModule { }
