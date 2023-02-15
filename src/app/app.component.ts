

import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router'
import { SupabaseService } from './services/supabase.service'
import { SplashScreen, SplashScreenPlugin } from '@capacitor/splash-screen';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor( private platform: Platform,private supabase: SupabaseService, private router: Router) {
    this.supabase.authChanges((_, session) => {
      console.log(session)
      if (session?.user) {
        // console.log(session.user)
      // this.router.navigate(['/'])
      }
      else{
        this.router.navigate(['/signin'])
      }
      
    });

    this.platform.ready().then(() => {
     SplashScreen.hide();
      // console.log('check platform readiness');
    });
  }
  ngOnInit(){
   
  }

  
  }

  
    
  

