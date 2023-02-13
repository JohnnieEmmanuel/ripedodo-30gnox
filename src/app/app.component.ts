

import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private splashScreen: SplashScreen, private platform: Platform) {}

  async ngOnInit() {
    await this.platform.ready();
    this.splashScreen.hide();
  }

  
    
  }

