import { Component } from '@angular/core';
import {StreamingMedia,StreamingVideoOptions} from "@ionic-native/streaming-media/ngx"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  videoUrl:string = "https://d1deccugb2p5vs.cloudfront.net/Infinite.mp4";
  constructor(private streamingMedia: StreamingMedia) { }

  ngOnInit() {}

  
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


