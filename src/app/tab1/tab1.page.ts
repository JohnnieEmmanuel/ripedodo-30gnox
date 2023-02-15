import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { MoviecrudService } from '../services/moviecrud.service';
import { Profile, SupabaseService } from '.././services/supabase.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  profile: Profile = {
    fullname: '',
  

  }
  @ViewChild('slidesRef', { static: true }) 
  slidesRef: IonSlides;

  Movies: any = [];
 Tvshows:any = [];
MoviesOnly:any = [];
public options = {
  keyboard: true,
  slidesPerView:1,
     autoplay:{delay:7000}
 
}

public slideWillChange() {
  console.log('Slide will change');
}

public async slideDidChange() {
  console.log('Slide did change');

  if (!this.slidesRef) return;

  console.table({
    isBeginning: await this.slidesRef.isBeginning(),
    isEnd: await this.slidesRef.isEnd()
  });
}

session = this.supabase.session

  constructor(private movieCrudService: MoviecrudService,
    private readonly supabase: SupabaseService,
    private router: Router) {}

 

  ionViewDidEnter() {
    // if(this.session){
    //   this.getProfile()
    //   }
    //   else{
    //   this.router.navigate(['/signin'], { replaceUrl: true })
  
    //   }

    this.movieCrudService.getMovies().subscribe((response) => {
      this.Movies = response;
      console.log(this.Movies);

    // filterSeriesOnly(this.Movies);
    this.Tvshows  = this.Movies.filter(tvshow => tvshow.movietype === 'series') //filter series only

    this.MoviesOnly  = this.Movies.filter(movie => movie.movietype === 'movie') //filter movies only

    })

  }
  
  // async getProfile() {
  //   try {
  //     let { data: profile, error, status } = await this.supabase.profile
  //     if (error && status == 406) {
  //       console.log("new user -- redirecting to verification page")
  //       // this.router.navigate(['/verification'], { replaceUrl: true })

  //     }
    
  //     if (profile) {
  //       this.profile = profile
        
  //     }
  //   } catch (error) {
  //     alert(error.message)
  //   }
  // }
  
  
  

}
