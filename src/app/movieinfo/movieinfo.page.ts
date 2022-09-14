import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviecrudService} from '../services/moviecrud.service';
@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.page.html',
  styleUrls: ['./movieinfo.page.scss'],
})
export class MovieinfoPage implements OnInit {

  information = null;
movieId:any
  /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   * @param moviecrudService The movie Service to get data
   
   */
  constructor(private activatedRoute: ActivatedRoute, private moviecrudService:MoviecrudService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("checking id", id)
  

    this.moviecrudService.getDetails(id).subscribe(result => {
      this.information = result;
     this.movieId = id;
     console.log("check info", this.information);
    });
  }

}
