import { Component } from '@angular/core';
import {StreamingMedia,StreamingVideoOptions} from "@ionic-native/streaming-media/ngx"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  videoUrl:string = "";
  constructor(private stream:StreamingMedia) { }

  ngOnInit() {}

  streamVideo(){
    var option:StreamingVideoOptions={
      orientation:"portrait",
      controls:true
    }
    this.stream.playVideo(this.videoUrl, option);
  }
}
