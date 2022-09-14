import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieinfoPage } from './movieinfo.page';

const routes: Routes = [
  {
    path: '',
    component: MovieinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieinfoPageRoutingModule {}
