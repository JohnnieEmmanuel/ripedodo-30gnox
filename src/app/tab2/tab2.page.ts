import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { MoviecrudService } from '../services/moviecrud.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  filterTerm: string ='';

  Movies: any = [];
  
  constructor(private movieCrudService: MoviecrudService) {}


  
  ionViewDidEnter() {
    this.movieCrudService.getMovies().subscribe((response) => {
      this.Movies = response;
      let da = this.Movies.movietitle;
    
      console.log(this.Movies);

    })

  
  }

  

  


}
