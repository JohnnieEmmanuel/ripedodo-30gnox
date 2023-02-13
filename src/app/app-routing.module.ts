import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import {ViewheaderComponent} from './viewheader/viewheader.component';
import { ProfileComponent } from './profile/profile.component';
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
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
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
    path: 'movie/:id',
    loadChildren: () => import('./movieinfo/movieinfo.module').then( m => m.MovieinfoPageModule)
  },
  {
    path: 'movieinfo',
    loadChildren: () => import('./movieinfo/movieinfo.module').then( m => m.MovieinfoPageModule)
  },{
    path: 'videoplayer', component: VideoplayerComponent 
  }
  ,
  {
    path: 'fullscreen',
    loadChildren: () => import('./fullscreen/fullscreen.module').then( m => m.FullscreenPageModule)
  },
  
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'categories/:tag',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  
  {
    path: 'watchlater/:id',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)

  },  
  {
    path: 'profile', component: ProfileComponent }
    ,
    {
      path: 'signin',
      loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
    },
    
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
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
