import { Injectable } from '@angular/core'
import { LoadingController, ToastController } from '@ionic/angular'
import {
  AuthChangeEvent,
  createClient,
  Session,
  SupabaseClient,
} from '@supabase/supabase-js'
import { environment } from '../../environments/environment'
import {Router} from '@angular/router'

export interface Profile {
  

  fullname: string
  

 
  
}
export interface Usertags {
  usertag: []
}


@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
  ) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }

  get user() {
    return this.supabase.auth.user()
  }

  get session() {
    return this.supabase.auth.session()
  }

 
  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.supabase.auth.onAuthStateChange(callback)
  };
  
 get profile() {
    return this.supabase
      .from('profiles')
      .select(`fullname`)
      .eq('id', this.user?.id)
      .single()
  }

 
 
  
  signIn(email: string, password:string) {
    return this.supabase.auth.signIn({ email,password })
  
  }

  signUp(email: string, password: string) {
    
    return this.supabase.auth.signUp({ email , password})
  }
  
 
  signOut() {
    return this.supabase.auth.signOut()
  }


  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      id: this.user?.id,
      updated_at: new Date(),
    }

    return this.supabase.from('profiles').upsert(update, {
      returning: 'minimal', // Don't return the value after inserting
    })
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path)
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file)
  }

  async createNotice(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 3000 })
    await toast.present()
  }
 
  createLoader() {
    return this.loadingCtrl.create()
  }
  
}