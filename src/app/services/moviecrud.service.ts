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

  endpoint = 'http://localhost:5000/v1/upload/uploadmoviedetails';



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }


getMovie(id): Observable<Movie[]> {
  return this.httpClient.get<Movie[]>('http://localhost:5000/api/fetch-movie/' + id)
    .pipe(
      tap(_ => console.log(`Movie fetched: ${id}`)),
      catchError(this.handleError<Movie[]>(`Get movie id=${id}`))
    );
}

getMovies(): Observable<Movie[]> {
  return this.httpClient.get<Movie[]>('http://localhost:5000/api')
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
