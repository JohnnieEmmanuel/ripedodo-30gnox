import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { MoviecrudService } from '../services/moviecrud.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  /**
   * @param activatedRoute Information about the route we are on
   
   */ 
  
   filterTerm: string ='';

   Movies: any = [];
   Tvshows:any = [];
  MoviesOnly:any = [];
  Genres:any =[]
  ss:any=[]

   constructor(private activatedRoute: ActivatedRoute,private movieCrudService: MoviecrudService,private animationCtrl: AnimationController, public router:Router) {}
 
 
   
   ionViewDidEnter() {
    let tag = this.activatedRoute.snapshot.paramMap.get('tag');
    console.log("CATEGORY:", tag)
  
     this.movieCrudService.getMovies().subscribe((response) => {
       this.Movies = response;
       let da = this.Movies.map(dak => dak.moviegenre)
     
       console.log(da);
      //  console.log(this.Movies)


this.ss = this.Movies

this.Genres = this.Movies.filter(genre => genre.moviegenre.toLowerCase().includes(tag))
 // filterSeriesOnly(this.Movies);
 this.Tvshows  = this.Movies.filter(tvshow => tvshow.movietype === 'series') //filter series only
    
 this.MoviesOnly  = this.Movies.filter(movie => movie.movietype === 'movie') //filter movies only

     })

    
        
    }
 
     
   
   

  ngOnInit() {
    
   

    // this.moviecrudService.getDetails(id).subscribe(result => {
    //   this.information = result;
    //  this.movieId = id;
    //  console.log("check info", this.information);
    //  console.log("check info", this.information.movietitle);
    //  console.log("check info", this.information.movieurl);


    // });
  }


  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
}

