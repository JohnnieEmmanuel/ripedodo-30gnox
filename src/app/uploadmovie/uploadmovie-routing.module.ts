import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadmoviePage } from './uploadmovie.page';

const routes: Routes = [
  {
    path: '',
    component: UploadmoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadmoviePageRoutingModule {}
