import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewheaderComponent } from './viewheader/viewheader.component';

   
// Imort search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [AppComponent, ViewheaderComponent],
imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  FormsModule, ReactiveFormsModule, 
  HttpClientModule,Ng2SearchPipeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
