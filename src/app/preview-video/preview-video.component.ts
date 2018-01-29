import { Component, OnInit } from '@angular/core';
import {VgAPI,VgFullscreenAPI,VgPlayer,VgMedia} from 'videogular2/core';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from "../dialog/dialog.component";
import {ReportComponent} from "../report/report.component";
import { Http , Response } from '@angular/http';
import { ElementRef, HostListener, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { WebService } from '../webservice/web.service';
import 'assets/video.js'
declare var videoObject: any;
import { VgStreamingModule } from 'videogular2/streaming';
import {WebPreviewComponent} from "../web-preview/web-preview.component";
@Component({
  selector: 'app-preview-video',
  templateUrl: './preview-video.component.html',
  styleUrls: ['./preview-video.component.css']
})
export class PreviewVideoComponent implements OnInit {

  i=0;
  j;
  preload:string = 'auto';
  api:VgAPI;
  ticks =0;
  target: any;
  pausetime;
  name: string;
  resl;
  z;
  returnmsg;
  returnmsg1;
  timerinstance;
  video_path_html;
  isValid = false;
  option;
  q_answer=0;
  marks=0;
  dis=0;
  h='220px';
  w='700px';
  test_count;
  popup_count=0;
  current_test;
  system_back=0;
  refresh=0;
  constructor(private webservice:WebService,private route: ActivatedRoute,public API: VgAPI,private _router: Router,public dialog: MdDialog,private http:Http,public fsAPI: VgFullscreenAPI) { }
ngOnInit() {
  this.video_questions();
}

webresponse(fun_id,return_data)
{
  // test details response
  if(fun_id==1)
  {
 this.returnmsg = return_data.json();
 this.returnmsg1=this.returnmsg.test[0];
 this.video_questions();
  }
}
video_questions()
{
  this.isValid = true;
  // this.video_path_html='http://static.videogular.com/assets/videos/videogular.mp4';
  this.video_path_html= (JSON.parse(localStorage.getItem('preview')).test_url);
  let timer = Observable.timer(1000,1000);
  this.j=0;   //total no of questions
  this.z=0;       //question count
  this.timerinstance = timer.subscribe(t=>{
  if(this.api.getDefaultMedia())
  {
    this.refresh=(JSON.parse(localStorage.getItem('preview_refresh')));
    if(this.refresh==1){
      this.refresh=0;
      localStorage.setItem('preview_refresh',JSON.stringify(0));
      window.location.reload();
    }
    this.ticks= Math.trunc(this.api.getDefaultMedia().currentTime);
    //checking wheather questions ended
    if(this.j==this.z)
    {

      // if(this.dis==0)
      // {
      //   if(this.returnmsg1.stop_time==this.ticks)
      //   {
      //     const body2 = {
      //       user_id:(JSON.parse(localStorage.getItem('user'))),
      //       test_id:this.current_test
      //     };
      //     this.webservice.webRequest(this,'post',this.webservice.test_completion,body2,'3','');
      //     localStorage.setItem('lastpause['+this.returnmsg1.test_id+']',  JSON.stringify(0));
      //     this.api.getDefaultMedia().pause();
      //     localStorage.setItem('replay',JSON.stringify(0));
      //     localStorage.setItem('next_play',JSON.stringify(0));
      //     let dialogRef=this.dialog.open(ReportComponent, {
      //     disableClose:true,
      //     data: {t_question:this.returnmsg1.no_of_questions,c_answer:this.q_answer,t_marks:this.marks,report:1}
      //     });
      //     dialogRef.afterClosed().subscribe(result => {
      //     if(result==0){
      //       //home
      //       this.system_back=1;
      //       localStorage.setItem('replay',JSON.stringify(0));
      //       localStorage.setItem('next_play',JSON.stringify(0));
      //       window.history.back();
      //     }
      //     else if(result==1){
      //       //replay
      //       this.system_back=1;
      //       localStorage.setItem('next_play',JSON.stringify(0));
      //       localStorage.setItem('replay',JSON.stringify(this.returnmsg1.test_id));
      //       window.history.back();
      //     }
      //     else if(result==2){
      //       //next
      //       this.system_back=1;
      //       localStorage.setItem('replay',JSON.stringify(0));
      //       localStorage.setItem('next_play',JSON.stringify(this.returnmsg1.next_test_id));
      //       window.history.back();
      //     }
      //   });
      //   console.log('Total Correct Answer',this.q_answer);
      //   console.log('Total Marks',this.marks);
      //   this.dis=1;
      //   }
      // } 
    }
    // executed for each questions
    else
    { 
      if((this.returnmsg1.question[this.z].Pause_time)==this.ticks)
        this.api.getDefaultMedia().pause();
      if((this.returnmsg1.question[this.z].Pause_time-1)==this.ticks)
      { 
        this.pop_up();
      }
    }
  }
  });
}

//pop up the question 
pop_up()
{
  if(window.innerHeight > window.innerWidth)
  {
    this.w='220px';
    this.h='700px';
  }
  else{
    this.h='220px';
    this.w='700px';
  }
  //dialog box for question
  let dialogRef=this.dialog.open(DialogComponent, {
    disableClose:true,
    data: {name:this.returnmsg1.question[this.z].question_title,option:this.returnmsg1.question[this.z].type_options,timer:this.returnmsg1.question[this.z].wait_time,ans:this.returnmsg1.question[this.z]}
  });
  // handling result after dialog box is closed
  dialogRef.afterClosed().subscribe(result => {
    this.z++;
    if(result!= undefined)
    this.api.getDefaultMedia().play();
  });
  return;
}
fullscreen()
{
  this.api.fsAPI.toggleFullscreen();
}
 onPlayerReady(api:VgAPI) { 
  this.api = api;
  videoObject.init();
}
}
