import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Movie {
  
  movietitle: string;
  movieurl: string;
  
  _id: number;
  movieruntime: string;
  movieplot:string
  moviegenre: string
  movieresponse: string
  movietype: string
  movieidmbid: string
  movieposter: string
  
 
}

@Injectable({
  providedIn: 'root'
})
export class MoviecrudService {

  url = 'http://localhost:5000';
  endpoint = 'http://localhost:5000/v1/upload/uploadmoviedetails';

// url='https://ripedodo-backend.herokuapp.com'
// endpoint = this.url+'/v1/upload/uploadmoviedetails';

mov;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }



getMovies(): Observable<Movie[]> {
  this.mov = this.httpClient.get<Movie[]>(this.url+'/api')
  return this.mov
    .pipe(
      tap(movies => console.log('Movies retrieved!')),
      catchError(this.handleError<Movie[]>('Get movie', []))
    );
}
getDetails(id): Observable<Movie[]> {
  return this.httpClient.get<Movie[]>(this.url+'/api/fetch-movie/' + id)
    .pipe(
      tap(_ => console.log(`Movie fetched: ${id}`)),
      catchError(this.handleError<Movie[]>(`Get movie id=${id}`))
    );
}
getComingsoon(): Observable<Movie[]> {
  this.mov = this.httpClient.get<Movie[]>(this.url+'/api/comingsoon')
  return this.mov
    .pipe(
      tap(movies => console.log('Movies retrieved!')),
      catchError(this.handleError<Movie[]>('Get movie', []))
    );
}

movieupload(movie: Movie): Observable<any> {
  return this.httpClient.post<Movie>(this.endpoint, JSON.stringify(movie), this.httpOptions)
    .pipe(
      catchError(this.handleError<Movie>('Error occured'))
    );
}



private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}  
}
