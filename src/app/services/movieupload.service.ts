import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


export class Movie {
  
  movietitle: string;
  movieurl: string;
  movieruntime: string;
  movieplot:string
  moviegenre: string
  movieresponse: string
  movietype: string
  movieidmbid: string
  movieposter: string
  movieseasons: number
  moviecasts:string
  movieratedpg:string
  
}

@Injectable({
  providedIn: 'root'
})
export class MovieuploadService {
//calling the api handling the upload for movie details
  // endpoint = 'http://localhost:5000/v1/uploaddetails';
  endpoint = 'https://ripedodo-backend.herokuapp.com/v1/uploaddetails';




  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }


movieupload(movie: Movie): Observable<any> {
  return this.httpClient.post<Movie>(this.endpoint,movie , this.httpOptions)
    .pipe(
      catchError(this.handleError<Movie>('Error occured'))
    );
}

comingsoon(movie: Movie): Observable<any> {
  return this.httpClient.post<Movie>(this.endpoint+'/comingsoon',movie , this.httpOptions)
    .pipe(
      catchError(this.handleError<Movie>('Error occured'))
    );
}

// JSON.stringify(movie)
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}  
}
