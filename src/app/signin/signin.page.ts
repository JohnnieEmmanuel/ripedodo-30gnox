import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';

import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

 
  email = ''
  password = ''
  constructor(private readonly supabase: SupabaseService,private router: Router) {}

  ngOnInit() {
  }
  async handleLogin(event: any) {
    event.preventDefault()
    const loader = await this.supabase.createLoader()
    await loader.present()
    try {
      let {error} = await this.supabase.signIn(this.email, this.password)
      await loader.dismiss()
      if(error){
      throw error
      }
      await this.supabase.createNotice('Sign In successfull')
    this.router.navigate(['/home'], { replaceUrl: true })



    } catch (error) {
      await loader.dismiss()
      await this.supabase.createNotice(error.error_description || error.message)
    }
  } 
  
 
}
