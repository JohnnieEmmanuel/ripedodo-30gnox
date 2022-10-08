import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviecrudService} from '../services/moviecrud.service';

import {StreamingMedia,StreamingVideoOptions} from "@ionic-native/streaming-media/ngx"
import { FullscreenPage } from '../fullscreen/fullscreen.page';

import { Capacitor } from '@capacitor/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.page.html',
  styleUrls: ['./movieinfo.page.scss'],
})
export class MovieinfoPage implements OnInit {

  videoUrl:string = "https://d1deccugb2p5vs.cloudfront.net/Infinite.mp4";


  public wPlatform = false;
  public aPlatform = false;
  public iPlatform = false;
  private url: string = null;
  private sturl: string = null;
  private stlang: string = null;
  private stoptions: any = null;
  private platform: string = null;
  private rate = 1.0;
  private exitOnEnd = true;
  private loopOnEnd = false;
  private pipEnabled = true;
  private bkmodeEnabled = true;

/* Video with subtitles in spanish*/
private mp4 = 'https://d1deccugb2p5vs.cloudfront.net/Infinite.mp4';
private mp4st = 'https://brenopolanski.github.io/html5-video-webvtt-example/MIB2-subtitles-pt-BR.vtt';
private mp4stLang = 'es';
private mp4stOptions: any = {backgroundColor:'rgba(0,0,0,0)', fontSize: 18, foregroundColor:'rgba(128,128,0,1)'};
/* end video with subtitle */

private testApi = false;

  information = null;
movieId:any
  /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   * @param moviecrudService The movie Service to get data
   
   */
  constructor(private activatedRoute: ActivatedRoute, private moviecrudService:MoviecrudService,private streamingMedia: StreamingMedia,public modalCtrl: ModalController) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("checking id", id)
  

    this.moviecrudService.getDetails(id).subscribe(result => {
      this.information = result;
     this.movieId = id;
     console.log("check info", this.information);
     console.log("check info", this.information.movietitle);
     console.log("check info", this.information.movieurl);


    });


    this.platform = Capacitor.getPlatform();
    console.log(`$$$ platform: ${this.platform}`);
    if (this.platform === 'ios' || this.platform === 'android') {
      if (this.platform === 'ios') {
        this.iPlatform = true;
        this.aPlatform = false;
      } else {
        this.iPlatform = false;
        this.aPlatform = true;
      }
      this.wPlatform = false;
    } else {
      this.wPlatform = true;
      this.iPlatform = false;
      this.aPlatform = false;
    }
  
  
  }


  async testVideoPlayerPlugin(vType: string) {
    if(vType === 'mp4') {
      this.url = this.mp4;
      if(this.aPlatform){
          this.playVideo();
      }
      else if(this.iPlatform){
        this.playVideo();
      
      }
      else if(this.wPlatform){
        if(this.videoUrl === 'https://d1deccugb2p5vs.cloudfront.net/Infinite.mp4') {
      this.sturl = this.mp4st;
      this.stlang = this.mp4stLang ;
      this.stoptions = this.mp4stOptions;
    } else {
      this.sturl = null;
      this.stlang = null;
      this.stoptions = null;
    }
    const modal = await this.modalCtrl.create({
      component: FullscreenPage,
      componentProps: {
        url: this.url,
        sturl: this.sturl,
        stlang: this.stlang,
        stoptions: this.stoptions,
        rate: this.rate,
        exitOnEnd: this.exitOnEnd,
        loopOnEnd: this.loopOnEnd,
        pipEnabled: this.pipEnabled,
        bkmodeEnabled: this.bkmodeEnabled,
        testApi: this.testApi,
        platform: this.platform
      },
      swipeToClose: false
    });
    await modal.present();
      }
      else{
        console.log("Your devices is not supported")
      }
    }
    else {
      console.log('Video format not supported');
    }
    
  }

   playVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: true
    };
    this.streamingMedia.playVideo(this.videoUrl, options);
  }
}
 

