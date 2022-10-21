import { Component } from '@angular/core';
import { WatchlaterService } from '../services/watchlater.service';
import { MoviecrudService } from '../services/moviecrud.service';
import { AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  Movies:any;
  Darks:any;
uniqueArr:any
  Wlater: any;
  watchLists:any;
hold=[]
temp=[]

  min: any;
  constructor(private animationCtrl: AnimationController,private watchlaterservice:WatchlaterService, private movieCrudService:MoviecrudService) { }
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
  ionViewDidEnter() {

    this.movieCrudService.getMovies().subscribe((response) => {
      this.Movies = response;
      console.log(this.Movies);

      this.watchlaterservice.getWl().subscribe((response) => {
        this.Wlater = response;
        console.log(this.Wlater);
        this.watchLists = this.Movies.filter(movie =>movie._id  )
       
      console.log(this.watchLists[0]._id)
     const nn =  this.watchLists.length
     console.log("nn=",nn)
     const mm =  this.Wlater.length
     console.log("wl",mm)


     for (var i = 0; i < mm; i++ ){
      console.log("wlater",this.Wlater)
      console.log(this.watchLists)
         this.min =  this.watchLists.filter(vv => vv._id === this.Wlater[i]._id)
       
         const zz = this.hold.push(this.min)
    this.temp[i]= this.hold[i][0]
     }  
console.log("this is min",this.min)
 console.log("this is hold",this.hold)
 console.log("this is temp  ",this.temp)

 
 function removeDuplicateObjectFromArray(array, key) {
  return array.filter((obj, index, self) =>
      index === self.findIndex((el) => (
          el[key] === obj[key]
      ))
  )
}
// console.log(removeDuplicateObjectFromArray(this.temp, '_id'))
// console.log("this is hold",this.hold.length)
        const cave =  removeDuplicateObjectFromArray(this.temp, '_id')
        console.log(cave)
this.Darks = cave.map(dark=>dark)
        
// for(var i=0;i<this.hold.length;i++){
//   this.temp[i] = this.hold[i][0]
// // this.Darks = this.temp.map(dark=>dark)

// }
//  console.log(this.temp)
//  console.log(this.Darks)
 

      })

    })

    
  }
  

}


