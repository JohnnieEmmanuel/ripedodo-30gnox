import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesearchService, SearchType } from '../services/moviesearch.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  private file: File;
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 
  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */ 
  constructor(private movieService: MoviesearchService, private http: HttpClient) { }


  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }


    

   
  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }
  async submitForm() {
    let formData = new FormData();
    formData.append("file", this.file, this.file.name);
    this.http.post("http://localhost:5000/upload", formData).subscribe((response) => {
      console.log(response);
    });
  }

  
  
  ngOnInit() {
  }
  
}
