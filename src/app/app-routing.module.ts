import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
import {ViewheaderComponent} from './viewheader/viewheader.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
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
  }
 
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
