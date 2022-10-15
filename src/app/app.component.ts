import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { MoviecrudService } from './services/moviecrud.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {
  Movies: any = [];
  Tvshows:any = [];
 MoviesOnly:any = [];
   constructor(private movieCrudService: MoviecrudService) {}
 
   ionViewDidEnter() {
     this.movieCrudService.getMovies().subscribe((response) => {
       this.Movies = response;
       console.log(this.Movies);
 
     // filterSeriesOnly(this.Movies);
     this.Tvshows  = this.Movies.filter(tvshow => tvshow.movietype === 'series') //filter series only
 
     this.MoviesOnly  = this.Movies.filter(movie => movie.movietype === 'movie') //filter movies only
 
     })
 
   
 
    }}