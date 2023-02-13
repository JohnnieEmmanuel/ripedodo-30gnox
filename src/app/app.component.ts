

import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router'
import { SupabaseService } from './services/supabase.service'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private splashScreen: SplashScreen, private platform: Platform,private supabase: SupabaseService, private router: Router) {
    this.supabase.authChanges((_, session) => {
      console.log(session)
      if (session?.user) {
        console.log(session.user)
      //  this.router.navigate(['/home'])
      }
      
    });
  }

  async ngOnInit() {
    await this.platform.ready();
    this.splashScreen.show();
  }

  
    
  }

