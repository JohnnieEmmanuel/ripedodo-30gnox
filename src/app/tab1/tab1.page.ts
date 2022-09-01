import { Component } from '@angular/core';

import { MoviecrudService } from '../services/moviecrud.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Movies: any = [];
  
  constructor(private movieCrudService: MoviecrudService) {}

  ionViewDidEnter() {
    this.movieCrudService.getMovies().subscribe((response) => {
      this.Movies = response;
      console.log(this.Movies);

    })
  }

}
