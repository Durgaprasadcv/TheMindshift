import { Component, OnInit } from '@angular/core';
import {VgAPI,VgFullscreenAPI,VgPlayer,VgMedia} from 'videogular2/core';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from "../dialog/dialog.component";
import { Http , Response } from '@angular/http';
import { ElementRef, HostListener, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import 'assets/video.js'
declare var videoObject: any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  i=0;
  j;
  preload:string = 'auto';
  api:VgAPI;
  ticks =0;
  ticks1 =0;
  target: any;
  pausetime;
  animal: string;
  name: string;
  resl;
  z;
  returnmsg1;
  returnmsg2;
 timerinstance;
 video_path_html;
  isValid = false;
  option;
  constructor(private route: ActivatedRoute,public API: VgAPI,private _router: Router,public dialog: MdDialog,private http:Http,public fsAPI: VgFullscreenAPI) { 
  }
ngOnInit() {
  let id = this.route.snapshot.paramMap.get('id');
  console.log('data from carousel route to video',id);
  const body = {user_id:'32'};
  this.http.post('http://lg.djitsoft.xyz/api/gettest',body)
  .subscribe(
    data => this.returnmsg1 = data.json(),
    err => console.log('failed'),
    () =>{
            this.isValid = true;
            this.video_path_html=this.returnmsg1.test[id].video_path;
            let timer = Observable.timer(1000,1000);
            this.j=this.returnmsg1.test[id].no_of_questions;
            this.z=0;
            this.timerinstance = timer.subscribe(t=>{this.ticks=this.ticks+1;
            this.ticks1= Math.trunc(this.api.getDefaultMedia().currentTime);
            if(this.j==this.z)
            { }
            else
            { 
                if((this.returnmsg1.test[id].question[this.z]. Pause_time)==this.ticks1)
                this.api.getDefaultMedia().pause();
                if((this.returnmsg1.test[id].question[this.z]. Pause_time-1)==this.ticks1)
                {
                  let dialogRef=this.dialog.open(DialogComponent, {
                    height: '220px',
                    width:'700px', 
                    data: {name:this.returnmsg1.test[id].question[this.z].question_title,option:this.returnmsg1.test[id].question[this.z].type_options,timer:this.returnmsg1.test[id].question[this.z].wait_time}
                  });
                  dialogRef.afterClosed().subscribe(result => {
                  this.resl= result;
                  //this.api.getDefaultMedia().play();
                  console.log('The dialog was closed',this.resl);
                  this.z++;
                  // this.api.getDefaultMedia().currentTime = this.returnmsg1.test[0].question[this.z].answers[0];
                  //  this.api.seekTime(this.returnmsg1.test[0].question[this.z].answers[0], false);
                  this.api.getDefaultMedia().play();
                  });
                }
            }
            });
          });
}
fullscreen()
{
  document.getElementById("demo").innerHTML = "full screen function called!"
  this.api.fsAPI.toggleFullscreen();
}
 onPlayerReady(api:VgAPI) {
  this.api = api;
  //this.target = this.api.getMediaById();
  //this.api.fsAPI.enterElementInFullScreen;
  this.api.fsAPI.toggleFullscreen;
  this.api.getDefaultMedia().subscriptions.loadedData.subscribe(
    () => {
      //this.api.fsAPI.toggleFullscreen();
      //videoObject.init();
      //this.fullscreen();
      //$ ('#button_id').click();
    }
);
  this.api.getDefaultMedia().subscriptions.ended.subscribe(
    () => {
       this.api.getDefaultMedia().pause();
       this.timerinstance.unsubscribe();
       this._router.navigate(['/bcarousel']);
    }
);
}
}

 


