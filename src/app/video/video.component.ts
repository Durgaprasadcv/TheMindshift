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
// import 'assets/video.js'
// declare var videoObject: any;
import { VgStreamingModule } from 'videogular2/streaming';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  providers : [WebService],
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
  constructor(private webservice:WebService,private route: ActivatedRoute,public API: VgAPI,private _router: Router,public dialog: MdDialog,private http:Http,public fsAPI: VgFullscreenAPI) { }
ngOnInit() {
  let id = this.route.snapshot.paramMap.get('id');
  this.current_test=this.route.snapshot.paramMap.get('id');
  console.log('data from video_list to video: ',id);
  //to get test details
  const body = {
    user_id:(JSON.parse(localStorage.getItem('user'))),
    test_id:id};
  this.webservice.webRequest(this,'post',this.webservice.gettest_detail_uid,body,'1','');
}

//called on back button pressed
@HostListener('window:popstate', ['$event'])
  onPopState(event) {
  if(this.system_back==0){
   localStorage.setItem('replay',JSON.stringify(0));
   localStorage.setItem('next_play',JSON.stringify(0));
  }  
}
//to update result
question_update(test_id,test_name,answer_time,question_no,marks_per_question,option_id){
  const body1 = {
    test_id:test_id,
    // test_name:test_name,
    answer_time:answer_time,
    question_no:question_no,
    marks_per_question:marks_per_question,
    option_id:option_id,
    user_id:(JSON.parse(localStorage.getItem('user')))};
  this.webservice.webRequest(this,'post',this.webservice.save_result,body1,'2','');
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
  // result update response
  if(fun_id==2){
    console.log('response of question update',return_data.json());
  }
  //test completion api response
  if(fun_id==3){
    console.log('test completed');
  }
}
video_questions()
{
  this.isValid = true;
  this.video_path_html=this.returnmsg1.video_path;
  //addeds current test id to localstorage
  localStorage.setItem('current_test',  JSON.stringify(this.returnmsg1.test_id));

  //keeps track of no of counts of test viewed
  if((JSON.parse(localStorage.getItem('testcount['+this.returnmsg1.test_id+']')))>0)
  {
    this.test_count=JSON.parse(localStorage.getItem('testcount['+this.returnmsg1.test_id+']'))+1;
    localStorage.setItem('testcount['+this.returnmsg1.test_id+']',  JSON.stringify(this.test_count));
  }
  else{
    localStorage.setItem('testcount['+this.returnmsg1.test_id+']',  JSON.stringify(1));
  }

  let timer = Observable.timer(1000,1000);
  this.j=this.returnmsg1.question.length;   //total no of questions
  this.z=0;       //question count
  this.timerinstance = timer.subscribe(t=>{
  if(this.api.getDefaultMedia())
  {
    //retrieve the last pause time 
    if((JSON.parse( localStorage.getItem('lastpause['+this.returnmsg1.test_id+']')))>0)
    {
      if(Math.trunc(this.api.getDefaultMedia().currentTime)==0)
      {
        if(this.popup_count==0)
        {
          this.popup_count=1;
          this.api.getDefaultMedia().pause();
          let dialogRef=this.dialog.open(ReportComponent, {
          disableClose:true,
          data: {report:0}
          });
          dialogRef.afterClosed().subscribe(result => {
            if(result){
              this.api.getDefaultMedia().currentTime=0;
              localStorage.setItem('lastpause['+this.returnmsg1.test_id+']',  JSON.stringify(0));
              console.log('local',(JSON.parse( localStorage.getItem('lastpause['+this.returnmsg1.test_id+']'))));
              console.log('pop result',result);
            }
            else
            {
              this.api.getDefaultMedia().currentTime=(JSON.parse( localStorage.getItem('lastpause['+this.returnmsg1.test_id+']')));
              console.log('local',(JSON.parse( localStorage.getItem('lastpause['+this.returnmsg1.test_id+']'))));
              console.log('pop result',result);
            }
            this.api.getDefaultMedia().play();
            this.popup_count=0;
          });
        }
      }
    }
    this.ticks= Math.trunc(this.api.getDefaultMedia().currentTime);
    
    // update the current time to local storage
    if(this.returnmsg1.stop_time>this.ticks&&this.ticks>0)
    {
    localStorage.setItem('lastpause['+this.returnmsg1.test_id+']',  JSON.stringify(this.ticks+1));
    }

    // setting pause time to 0 after completion of test in local storage
    if(this.returnmsg1.stop_time==this.ticks&&this.j!=this.z)
    {
      localStorage.setItem('lastpause['+this.returnmsg1.test_id+']',  JSON.stringify(0));
      window.history.back();
    }

    //checking wheather questions ended
    if(this.j==this.z)
    {
      if(this.dis==0)
      {
        if(this.returnmsg1.stop_time==this.ticks)
        {
          // const body2 = {
          //   user_id:(JSON.parse(localStorage.getItem('user'))),
          //   test_id:this.current_test
          // };
          // this.webservice.webRequest(this,'post',this.webservice.test_completion,body2,'3','');
          this.api.getDefaultMedia().pause();
          localStorage.setItem('replay',JSON.stringify(0));
          localStorage.setItem('next_play',JSON.stringify(0));
          let dialogRef=this.dialog.open(ReportComponent, {
          disableClose:true,
          data: {t_question:this.returnmsg1.no_of_questions,c_answer:this.q_answer,t_marks:this.marks,report:1}
          });
          dialogRef.afterClosed().subscribe(result => {
          if(result.contrl==0){
            //home
            this.system_back=1;
            localStorage.setItem('replay',JSON.stringify(0));
            localStorage.setItem('next_play',JSON.stringify(0));
            window.history.back();
          }
          else if(result.contrl==1){
            //replay
            this.system_back=1;
            localStorage.setItem('next_play',JSON.stringify(0));
            localStorage.setItem('replay',JSON.stringify(this.returnmsg1.test_id));
            window.history.back();
          }
          else if(result.contrl==2){
            //next
            this.system_back=1;
            localStorage.setItem('replay',JSON.stringify(0));
            localStorage.setItem('next_play',JSON.stringify(this.returnmsg1.next_test_id));
            window.history.back();
          }
          if(result.feedback>=1){
            const body2 = {
              user_id:(JSON.parse(localStorage.getItem('user'))),
              test_id:this.current_test,
              feed_back:result.feedback
            };
            this.webservice.webRequest(this,'post',this.webservice.test_completion,body2,'3','');
            localStorage.setItem('lastpause['+this.returnmsg1.test_id+']',  JSON.stringify(0));
          }
          
        });
        console.log('Total Correct Answer',this.q_answer);
        console.log('Total Marks',this.marks);
        this.dis=1;
        }
      } 
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
    this.skip(result);
    this.z++;
    if(result!= undefined)
    this.api.getDefaultMedia().play();
  });
  return;
}

//skip the video depending on result
skip(result)
{
  this.resl= result;
  //if question is not answered
  if(this.resl==999)
  {
    console.log('Not Answered');
    this.question_update(this.returnmsg1.test_id,this.returnmsg1.test_name,this.returnmsg1.question[this.z].wait_time,this.returnmsg1.question[this.z].question_id,0,0);
  }
  // if question is answred correctly
  else if(this.returnmsg1.question[this.z].type_options.length>0 && this.resl != undefined)
  {
    if(this.returnmsg1.question[this.z].type_options[this.resl].id==this.returnmsg1.question[this.z].answers)
    {
      this.question_update(this.returnmsg1.test_id,this.returnmsg1.test_name,10,this.returnmsg1.question[this.z].question_id,this.returnmsg1.question[this.z].marks_assigned,this.returnmsg1.question[this.z].type_options[this.resl].id);
      console.log('Correct Answer');
      this.q_answer++;
      this.marks=this.marks+this.returnmsg1.question[this.z].marks_assigned;
      if(this.returnmsg1.question[this.z].type_options[this.resl].Option_skip.length>0)
      {
        this.api.getDefaultMedia().currentTime=this.returnmsg1.question[this.z].type_options[this.resl].Option_skip;
      }
    } 
    //if question is answered wrong
    else
    {
      console.log('Wrong Answer');
      this.question_update(this.returnmsg1.test_id,this.returnmsg1.test_name,15,this.returnmsg1.question[this.z].question_id,0,this.returnmsg1.question[this.z].type_options[this.resl].id);
      if(this.returnmsg1.question[this.z].type_options[this.resl].Option_skip.length>0)
      {
        this.api.getDefaultMedia().currentTime=this.returnmsg1.question[this.z].type_options[this.resl].Option_skip;
      }
    }
  }
  console.log('The dialog was closed',this.resl);
  return;
}
fullscreen()
{
  this.api.fsAPI.toggleFullscreen();
}
 onPlayerReady(api:VgAPI) { 
  this.api = api;
  // videoObject.init();
  this.api.getDefaultMedia().subscriptions.seeked.subscribe(
    () => {
        // Set the video to the beginning
        // this.api.getDefaultMedia().currentTime = 0;
        console.log('hai',Math.trunc(this.api.getDefaultMedia().currentTime));
    if((this.api.getDefaultMedia().currentTime)>(JSON.parse( localStorage.getItem('lastpause['+this.returnmsg1.test_id+']')))){
      this.api.getDefaultMedia().currentTime=(JSON.parse( localStorage.getItem('lastpause['+this.returnmsg1.test_id+']')));
    }
    }

);
}
}