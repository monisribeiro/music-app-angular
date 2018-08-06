import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from 'src/app/ui/shared/search/search.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ]
})
export class GlobalSharedModule { }
