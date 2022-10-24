import { Component } from '@angular/core';
import {MoviecrudService} from '../services/moviecrud.service'
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {
  Movies: any = [];
daks:any

  constructor(private movieCrudService: MoviecrudService) {}
 
  ionViewDidEnter() {
    this.movieCrudService.getComingsoon().subscribe((response) => {
      this.Movies = response;
      let da = this.Movies.movietitle;
    
      console.log(this.Movies);
      this.daks = this.Movies.map(dak => dak)


    })

 


 

  

  }
}
