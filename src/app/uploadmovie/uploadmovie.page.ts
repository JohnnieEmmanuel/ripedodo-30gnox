import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesearchService, SearchType } from '../services/moviesearch.service';
import { ActivatedRoute } from '@angular/router';
import {MoviecrudService} from '../services/moviecrud.service';
import { MovieuploadService,Movie } from '../services/movieupload.service';
@Component({
  selector: 'app-uploadmovie',
  templateUrl: './uploadmovie.page.html',
  styleUrls: ['./uploadmovie.page.scss'],
})
export class UploadmoviePage implements OnInit {

  information = null;
 movieId  = null;
  /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   * @param movieService The movie Service to get data
   */


  private file: File;
  results: Observable<any>;
  searchTerm: string = '';
  comingsoonTerm: string = '';

  type: SearchType = SearchType.all;
 
  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */ 
  constructor(private movieService: MoviesearchService, private http: HttpClient, private activatedRoute: ActivatedRoute, private movieuploadService:MovieuploadService) { }


  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }
  comingsoonChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.comingsoonTerm, this.type);
  }


    

   
  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }
  async submitForm() {
    let formData = new FormData();
    formData.append("file", this.file, this.file.name);
    this.http.post("http://localhost:5000/uploadvideo", formData).subscribe((response) => {
      console.log(response);
    });
  }

  
  
  ngOnInit() {
    this.onAdd();
  }

  onAdd(){
     // Get the ID that was passed with the URL
     let id = this.activatedRoute.snapshot.paramMap.get('id');
  if(id==null){
    console.log("no param passed")
  }
  else{
     // Get the information from the API
     this.movieService.getDetails(id).subscribe(result => {
       this.information = result;
      this.movieId = id;
      let moviedata = this.information
      console.log(moviedata);

 let parseJfile = JSON.stringify(moviedata);
const parsedData2 = JSON.parse(parseJfile);
console.log("test test"+parsedData2)
console.log(parsedData2.Year)

// let url = 'https://ripedodo.s3.amazonaws.com/uploads/'+parsedData2.Title+'.mp4';
let url = 'https://d1deccugb2p5vs.cloudfront.net/'+parsedData2.Title+'.mp4';

let movieURL = url.replace(/\s/g, '+');

// let movieURL = movieURLNospace.toLocaleLowerCase();
console.log(movieURL)
let data = {
  movietitle: parsedData2.Title,
  movieurl: movieURL,
  movieruntime: parsedData2.Runtime,
  movieplot:parsedData2.Plot,
  moviegenre: parsedData2.Genre,
  movieresponse: parsedData2.Response,
  movietype: parsedData2.Type,
  movieidmbid: parsedData2.imdbID,
  movieposter: parsedData2.Poster,
  movieseasons: parsedData2.totalSeasons,
  moviecasts:parsedData2.Actors,
  movieratedpg:parsedData2.Ratedpg

}
this.movieuploadService.movieupload(data).subscribe((response)=>{
  console.log(response);

})




     });
  }
    

  }


  onComingsoon(temp: any){
    // Get the ID that was passed with the URL
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
let id = temp;
console.log("this is the movie is",id)
 
    // Get the information from the API
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
     this.movieId = id;
     let moviedata = this.information
     console.log(moviedata);

let parseJfile = JSON.stringify(moviedata);
const parsedData2 = JSON.parse(parseJfile);
console.log("test test"+parsedData2)
console.log(parsedData2.Year)

// let url = 'https://ripedodo.s3.amazonaws.com/uploads/'+parsedData2.Title+'.mp4';
let url = 'https://d1deccugb2p5vs.cloudfront.net/'+parsedData2.Title+'.mp4';

let movieURL = url.replace(/\s/g, '+');

// let movieURL = movieURLNospace.toLocaleLowerCase();
console.log(movieURL)
let data = {
 movietitle: parsedData2.Title,
 movieurl: movieURL,
 movieruntime: parsedData2.Runtime,
 movieplot:parsedData2.Plot,
 moviegenre: parsedData2.Genre,
 movieresponse: parsedData2.Response,
 movietype: parsedData2.Type,
 movieidmbid: parsedData2.imdbID,
 movieposter: parsedData2.Poster,
 movieseasons: parsedData2.TotalSeasons,
 moviecasts:parsedData2.Casts,
 movieratedpg:parsedData2.Ratedpg

}
console.log(this.movieuploadService.comingsoon(data).subscribe((response)=>{
 console.log(response);

}))




    });

 }

 

  
  
 
  
}
