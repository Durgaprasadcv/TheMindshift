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
import { ScreenOrientation } from '@ionic-native/screen-orientation';
declare var videoObject: any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  providers : [WebService,ScreenOrientation],
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  i=0;
  j;
  preload:string = 'auto';
  api:VgAPI;
  ticks =0;
  target: any;
  pausetime;
  animal: string;
  name: string;
  resl;
  z;
  returnmsg;
  returnmsg1;
  returnmsg2;
  timerinstance;
  video_path_html;
  isValid = false;
  option;
  q_answer=0;
  marks=0;
  dis=0;
  reload=0;
  h='220px';
  w='700px';
  pop_parms;
  constructor(screenOrientation: ScreenOrientation,private webservice:WebService,private route: ActivatedRoute,public API: VgAPI,private _router: Router,public dialog: MdDialog,private http:Http,public fsAPI: VgFullscreenAPI) { 
    screenOrientation.lock(screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
ngOnInit() {
  (function()
  {
    if( window.localStorage )
    { 
      {
      if( !localStorage.getItem('firstLoad') )
      {
        localStorage['firstLoad'] = true;
       window.location.reload(true);
      }  
      else
        localStorage.removeItem('firstLoad');
    }
  }
  })();
  let id = this.route.snapshot.paramMap.get('id');
  console.log('data from video_list to video: ',id);
  const body = {user_id:'32'};
  this.webservice.webRequest(this,'post','http://lg.djitsoft.xyz/api/gettest_detail/'+id,body,'123','');
}
webresponse(fun_id,return_data)
{
 this.returnmsg = return_data.json();
 this.returnmsg1=this.returnmsg.test[0];
 this.video_questions();
}
video_questions(){
  this.isValid = true;
  this.video_path_html=this.returnmsg1.video_path;
  let timer = Observable.timer(1000,1000);
  this.j=this.returnmsg1.no_of_questions;
  this.z=0;
  this.timerinstance = timer.subscribe(t=>{
  if(this.api.getDefaultMedia())
  { 
  this.ticks= Math.trunc(this.api.getDefaultMedia().currentTime);
  if(this.j==this.z)
    { 
    //report
    
    // if(this.dis==0)
    // {
    //   if(this.returnmsg1.stop_time==this.ticks)
    //   {
    //   this.api.getDefaultMedia().pause();
    //   let dialogRef=this.dialog.open(ReportComponent, {
    //     height: '220px',
    //     width:'700px', 
    //     data: {t_question:this.returnmsg1.no_of_questions,c_answer:this.q_answer,t_marks:this.marks}
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     this._router.navigate(['/bcarousel']);
    //   });
    // console.log('Total Correct Answer',this.q_answer);
    // console.log('Total Marks',this.marks);
    // this.dis=1;
    // }
    // } 
  }
  else
  {  //  const body = {test_id:0,c_answer:0,t_marks:,questions};
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
pop_up()
{
if(window.innerHeight > window.innerWidth){
          this.w='220px';
          this.h='700px';
          }
          else{
            this.h='220px';
            this.w='700px';
          }
        let dialogRef=this.dialog.open(DialogComponent, {
          disableClose:true,
          data: {name:this.returnmsg1.question[this.z].question_title,option:this.returnmsg1.question[this.z].type_options,timer:this.returnmsg1.question[this.z].wait_time}
        });
        dialogRef.afterClosed().subscribe(result => {
        this.skip(result);
        this.z++;
        this.api.getDefaultMedia().play();
        });
        return;
}
skip(result)
{
  this.resl= result;
  if(this.resl==999)
  {
    console.log('Not Answered');
  }
  else if(this.returnmsg1.question[this.z].type_options.length>0)
  {
    if(this.returnmsg1.question[this.z].type_options[this.resl].id==this.returnmsg1.question[this.z].answers)
    {
    console.log('Correct Answer');
    this.q_answer++;
    this.marks=this.marks+this.returnmsg1.question[this.z].marks_assigned;
    this.api.getDefaultMedia().currentTime=this.returnmsg1.question[this.z].type_options[this.resl].Option_skip;
    }
  
    else
    {
    console.log('Wrong Answer');
    this.api.getDefaultMedia().currentTime=this.returnmsg1.question[this.z].type_options[this.resl].Option_skip;
    }
  }
  console.log('The dialog was closed',this.resl);
  return;
}
fullscreen()
{
 // document.getElementById("demo").innerHTML = "full screen function called!"
  this.api.fsAPI.toggleFullscreen();
}
 onPlayerReady(api:VgAPI) { 
  this.api = api;
  videoObject.init();
}
}