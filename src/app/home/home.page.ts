import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{

  private file: File;

  constructor(private http: HttpClient) {}

  onFileChange(fileChangeEvent){
    this.file = fileChangeEvent.target.files[0];
  }

 async submitForm() {
  let formData = new FormData();
  formData.append("photo",this.file, this.file.name);
  
  this.http.post("http://localhost:3000/upload", formData).subscribe((response)=>{
    console.log(response);
  });
  
 }
  

}
