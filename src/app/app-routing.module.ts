import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import {ViewheaderComponent} from './viewheader/viewheader.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    data: { preload: true }
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    data: { preload: true }
  },

{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule),
    data: { preload: false }
  },
  
  {
    path: 'uploadmovie',
    loadChildren: () => import('./uploadmovie/uploadmovie.module').then( m => m.UploadmoviePageModule),
    data: { preload: false }  
  },
  {
    path: 'uploadmovie/:id',
    loadChildren: () => import('./uploadmovie/uploadmovie.module').then( m => m.UploadmoviePageModule),
    data: { preload: false }
  },

  {
    path: 'viewheader', component: ViewheaderComponent,
    data: { preload: false }
  },

  {
    path: 'movie/:id',
    loadChildren: () => import('./movieinfo/movieinfo.module').then( m => m.MovieinfoPageModule),
    data: { preload: true }
  },
  {
    path: 'movieinfo',
    loadChildren: () => import('./movieinfo/movieinfo.module').then( m => m.MovieinfoPageModule)
  },{
    path: 'videoplayer', component: VideoplayerComponent, data: { preload: false }
  }
  ,
  {
    path: 'fullscreen',
    loadChildren: () => import('./fullscreen/fullscreen.module').then( m => m.FullscreenPageModule),data: { preload: false }
  },
  
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule),data: { preload: true }
  },
  {
    path: 'categories/:tag',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule),data: { preload: false }
  },
  
  {
    path: 'watchlater/:id',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule), data: { preload: false }

  },  
  {
    path: 'profile', component: ProfileComponent ,
    data: { preload: false }}
    ,
    {
      path: 'signin',
      loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule),
      data: { preload: true }
    },
    
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule),
    data: { preload: false }
  },
  {
    path: '**',
    loadChildren: () => import('./pagenotfound/pagenotfound.module').then( m => m.PagenotfoundPageModule),data: { preload: true }
  }






 
 
];

// RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }