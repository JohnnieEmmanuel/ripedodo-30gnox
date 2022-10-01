import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'v1',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'comingsoon',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
<<<<<<< HEAD
=======
      
      {
        path: 'profile',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
>>>>>>> e36cc4dd (added tab4 module)
      {
        path: '',
        redirectTo: '/v1/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/v1/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
