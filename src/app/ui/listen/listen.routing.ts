import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListenComponent } from 'src/app/ui/listen/listen.component';
import { PlayMusicProviderService } from 'src/app/ui/listen/shared/providers/play-music-provider.service';

const appRoutes: Routes = [
  { path: 'listen', component: ListenComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange',  resolve: {
      video: PlayMusicProviderService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
    providers: [
      PlayMusicProviderService
    ]
})
export class ListenRoutingModule { }

export const routedComponents = [];
