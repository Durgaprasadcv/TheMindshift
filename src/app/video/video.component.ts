import { Component, OnInit } from '@angular/core';
import {VgAPI} from 'videogular2/core';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from "../dialog/dialog.component";
import { Http , Response } from '@angular/http';
//import 'assets/video.js'
//declare var videoObject: any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  title = 'app';
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
 timerinstance ;
  seasons = [
    {
      "id":1,
      "name":'op1'
    },
    {
      "id":2,
      "name":'op2'
    }
  ];
  constructor(private _router: Router,public dialog: MdDialog,private http:Http) { }
ngOnInit() {
  const body = {user_id:'32'};

  this.http.post('http://lg.djitsoft.xyz/api/gettest',body)
  .subscribe(
        data => this.returnmsg1 = data.json(),
        err => console.log('failed'),
        () =>{
          console.log('Success Return data:',this.returnmsg1.test[0].no_of_questions)
    let timer = Observable.timer(1000,1000);
    console.log(this.returnmsg1);
    this.j=this.returnmsg1.test[0].no_of_questions;
    this.z=0;
    for(var i=0;i<this.returnmsg1.test[0].no_of_questions;i++)
      {
        console.log('Time',this.returnmsg1.test[0].question[0].question_title);
        console.log('Time',this.returnmsg1.test[0].question[1].question_title);
        console.log('Time',this.returnmsg1.test[0].question[this.z].Pause_time);
        console.log('Time',this.returnmsg1.test[0].question[1].Pause_time);
      }
    this.timerinstance = timer.subscribe(t=>{this.ticks=this.ticks+1;
    this.ticks1= Math.trunc(this.api.getDefaultMedia().currentTime);
   // console.log('Time',this.ticks1);
 if(this.j==this.z)
  { }
 else {
    { if((this.returnmsg1.test[0].question[this.z]. Pause_time)==this.ticks1)
      this.api.getDefaultMedia().pause();
      if((this.returnmsg1.test[0].question[this.z]. Pause_time-1)==this.ticks1)
        {
          let dialogRef=this.dialog.open(DialogComponent, {
            height: '220px',
            width:'700px', 
            data: {name:this.returnmsg1.test[0].question[this.z].question_title,seasons:this.returnmsg1.test[0].question[this.z].type_options,timer:this.returnmsg1.test[0].question[this.z].wait_time}
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
}
});
    /*
if(this.ticks1==4)
  {
    let dialogRef=this.dialog.open(DialogComponent, {
      height: '220px',
      width:'600px',
      data: {name:'Would you like to continue?',seasons:this.seasons,timer:'15'}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.resl= result;
      this.api.getDefaultMedia().play();
      console.log('The dialog was closed',this.resl);
      if (this.resl == 1) {
           this.api.getDefaultMedia().currentTime = 20;
         } 
         else if(this.resl == 2) {
         this.api.getDefaultMedia().currentTime = 15;
         }
         else if(this.resl == 999) {
          this.api.getDefaultMedia().currentTime = 10;
          }
          else{
            this.api.getDefaultMedia().currentTime = 6;
          }
    });
  }
  if(this.ticks1==25)
    this.api.getDefaultMedia().pause();
  if(this.ticks1==24)
  {
    let dialogRef=this.dialog.open(DialogComponent, {
      height: '220px',
      width:'600px',
      data: {name:'Would you like to continue?',seasons:this.seasons,timer:'15'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.resl= result;
      if (this.resl == 1) {
           this.api.getDefaultMedia().currentTime = 135;
         } 
         else if(this.resl == 2) {
         this.api.getDefaultMedia().currentTime = 62;
         }
         else{
          this.api.getDefaultMedia().currentTime = 26;
         }
         this.api.getDefaultMedia().play();
    });
  }*/
});
}
 onPlayerReady(api:VgAPI) {
  this.api = api;
  //this.target = this.api.getMediaById();
  //this.api.fsAPI.enterElementInFullScreen;
  this.api.fsAPI.toggleFullscreen;
  this.api.getDefaultMedia().subscriptions.loadedData.subscribe(
    () => {
   //   videoObject.init();
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

 


