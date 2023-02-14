import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
fullname= ''
  email = ''
  password = ''
 confirm_password = ''
 
  constructor(private readonly supabase: SupabaseService,private router: Router) {}

  ngOnInit() {
    
  }
  

  async handleSignup(event: any) {
    event.preventDefault()
    const loader = await this.supabase.createLoader()
    await loader.present()
    try {
      await loader.dismiss()

      let {error} =    await this.supabase.signUp(this.email, this.password)
      if(error){
      throw error
      }
      
      await loader.dismiss()
      await this.supabase.createNotice('Account confirmation link has been sent to your mail.')

    } catch (error) {
      await loader.dismiss()
      await this.supabase.createNotice(error.error_description || error.message)
    }
  }
 


}
