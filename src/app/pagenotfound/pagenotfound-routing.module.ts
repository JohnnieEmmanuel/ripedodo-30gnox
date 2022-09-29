import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagenotfoundPage } from './pagenotfound.page';

const routes: Routes = [
  {
    path: '',
    component: PagenotfoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagenotfoundPageRoutingModule {}
