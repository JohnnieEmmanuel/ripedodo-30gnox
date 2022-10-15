import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { MoviecrudService } from '../services/moviecrud.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
  constructor(private movieCrudService: MoviecrudService) {}

  ionViewDidEnter() {
    this.movieCrudService.getMovies().subscribe((response) => {
      this.Movies = response;
      console.log(this.Movies);

    // filterSeriesOnly(this.Movies);
    this.Tvshows  = this.Movies.filter(tvshow => tvshow.movietype === 'series') //filter series only

    this.MoviesOnly  = this.Movies.filter(movie => movie.movietype === 'movie') //filter movies only

    })
    

 


 

  

  }
  
  
  
  

}
