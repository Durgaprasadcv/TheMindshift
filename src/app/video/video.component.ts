import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public open(video)
  {
  //alert('hai');
    var video1 = document.getElementById("Video1");
   var button = document.getElementById("buttonbar");
  }

}
