import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Profile, SupabaseService } from '.././services/supabase.service'
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {

  profile: Profile = {
   fullname:''

  }

  session = this.supabase.session

  constructor(
    private readonly supabase: SupabaseService,
    private router: Router
  ) {}
  ionViewDidEnter() {
    this.getProfile()

  }
  async getProfile() {
    try {
      let { data: profile, error, status } = await this.supabase.profile
      if (error && status !== 406) {
        // throw error
      }
      if (profile) {
        this.profile = profile
      }
    } catch (error) {
      alert(error.message)
    }
  }

  async updateProfile(avatar_url: string = '') {
    const loader = await this.supabase.createLoader()
    await loader.present()
    try {
      await this.supabase.updateProfile({ ...this.profile})
      await loader.dismiss()
      await this.supabase.createNotice('Profile updated!')
    } catch (error) {
      await this.supabase.createNotice(error.message)
    }
  }

  async signOut() {
    console.log('testing?')
    await this.supabase.signOut()
    this.router.navigate(['/signin'], { replaceUrl: true })
  }
}
