import { Component, OnInit } from '@angular/core';
import {StreamingMedia,StreamingVideoOptions} from "@ionic-native/streaming-media/ngx"


@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
})
export class VideoplayerComponent implements OnInit {
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
