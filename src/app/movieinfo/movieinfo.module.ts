import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieinfoPageRoutingModule } from './movieinfo-routing.module';

import { MovieinfoPage } from './movieinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieinfoPageRoutingModule
  ],
  declarations: [MovieinfoPage]
})
export class MovieinfoPageModule {}
