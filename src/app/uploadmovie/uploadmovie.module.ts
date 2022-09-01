import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadmoviePageRoutingModule } from './uploadmovie-routing.module';

import { UploadmoviePage } from './uploadmovie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadmoviePageRoutingModule
  ],
  declarations: [UploadmoviePage]
})
export class UploadmoviePageModule {}
