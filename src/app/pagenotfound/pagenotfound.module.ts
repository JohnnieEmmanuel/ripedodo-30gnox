import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagenotfoundPageRoutingModule } from './pagenotfound-routing.module';

import { PagenotfoundPage } from './pagenotfound.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagenotfoundPageRoutingModule
  ],
  declarations: [PagenotfoundPage]
})
export class PagenotfoundPageModule {}
