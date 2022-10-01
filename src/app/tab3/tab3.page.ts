import { Component } from '@angular/core';
import {StreamingMedia,StreamingVideoOptions} from "@ionic-native/streaming-media/ngx"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  videoUrl:string = "https://d1deccugb2p5vs.cloudfront.net/Infinite.mp4";
  constructor(private stream:StreamingMedia,private streamingMedia: StreamingMedia) { }

  ngOnInit() {}

  streamVideo(){
    var option:StreamingVideoOptions={
      orientation:"landscape",
      controls:true
    }
    this.stream.playVideo(this.videoUrl, option);
  }
  playVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: true
    };
    this.streamingMedia.playVideo('https://d1deccugb2p5vs.cloudfront.net/Infinite.mp4', options);
  }
}


