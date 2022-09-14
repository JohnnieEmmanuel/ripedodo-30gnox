import { Component } from '@angular/core';

import { MoviecrudService } from '../services/moviecrud.service';

import { Injectable } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Movies: any = [];
  items:any =[
    {
        "id": "0",
        "status":"marketplace",
        "name": "Webstore",
        "link": "https://youthscarf.com",
        "iconlink": "http://atmoweb.id/wp-content/uploads/2019/10/ysweb.jpg"
    },
    {
        "id": "6",
        "status":"oa",
        "name": "Instagram Signature",
        "link": "https://instagram.com/youthcatalog_id/",
        "iconlink": "http://atmoweb.id/wp-content/uploads/2019/10/listdummy.jpg"
    }
]
  
  constructor(private movieCrudService: MoviecrudService) {}

  ionViewDidEnter() {
    this.movieCrudService.getMovies().subscribe((response) => {
      this.Movies = response;
      console.log(this.Movies);

    getseries(this.Movies);

    })

  

  }
   getMarketplaceItems(items) {
    return items.filter(item => item.status === 'marketplace');
  }
  

}
function getseries(moviearrs:any) {
  console.log("manner from heaven")
  console.log(moviearrs)
  console.log(moviearrs.filter(moviearr => moviearr.movietype === 'series')) ;

  return moviearrs.filter(moviearr => moviearr.movietype === 'series');



}



