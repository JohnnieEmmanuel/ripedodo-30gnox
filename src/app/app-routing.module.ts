import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
import { PlayerComponent } from './player/player.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import {ViewheaderComponent} from './viewheader/viewheader.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'uploadmovie',
    loadChildren: () => import('./uploadmovie/uploadmovie.module').then( m => m.UploadmoviePageModule)
  },
  {
    path: 'uploadmovie/:id',
    loadChildren: () => import('./uploadmovie/uploadmovie.module').then( m => m.UploadmoviePageModule)
  },

  {
    path: 'viewheader', component: ViewheaderComponent 
  },
  {
    path: 'headers', component: HeadersComponent 
  },
  {
    path: 'movie/:id',
    loadChildren: () => import('./movieinfo/movieinfo.module').then( m => m.MovieinfoPageModule)
  },
  {
    path: 'movieinfo',
    loadChildren: () => import('./movieinfo/movieinfo.module').then( m => m.MovieinfoPageModule)
  },{
    path: 'videoplayer', component: VideoplayerComponent 
  }
  ,{
    path: 'player', component: PlayerComponent 
  },
  {
    path: '**',
    loadChildren: () => import('./pagenotfound/pagenotfound.module').then( m => m.PagenotfoundPageModule)
  }

 
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
