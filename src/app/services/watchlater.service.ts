

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Watchlater {
  
  _id: string;
}

@Injectable({
  providedIn: 'root'
})
export class WatchlaterService {

  // url = 'http://localhost:5000';  
  // endpoint = 'http://localhost:5000/v1/list';

// url='https://ripedodo-backend.herokuapp.com'
// endpoint = this.url+'/v1/list';


url='https://ripedodo-backend.vercel.app'
endpoint = this.url+'/v1/list';

mov;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getWl(): Observable<Watchlater[]> {
    this.mov = this.httpClient.get<Watchlater[]>(this.endpoint)
    return this.mov
      .pipe(
        tap(movies => console.log('Movies retrieved!')),
        catchError(this.handleError<Watchlater[]>('Get movie', []))
      );
  }

watchlater(watchlater: Watchlater): Observable<any> {
  return this.httpClient.post<Watchlater>(this.endpoint+'/watchlater', watchlater, this.httpOptions)
    .pipe(
      catchError(this.handleError<Watchlater>('Error occured'))
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
