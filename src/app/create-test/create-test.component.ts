import { Component,OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
import { FormGroup,FormArray,FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';
import { jsonpFactory } from '@angular/http/src/http_module';
import { VgAPI,VgFullscreenAPI,VgPlayer,VgMedia } from 'videogular2/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { MdDialog,MD_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from "../dialog/dialog.component";
import { ReportComponent } from "../report/report.component";
import { Http,Response } from '@angular/http';
import { ElementRef, HostListener, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
// import 'assets/video.js'
// declare var videoObject: any;
import { WebPreviewComponent } from "../web-preview/web-preview.component";
import { ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';
import * as $  from 'jquery';
@Component({
  moduleId: module.id,
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  providers: [WebService],
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
public myForm: FormGroup;
loading: boolean = false;
@ViewChild('fileInput') fileInput: ElementRef;
form: FormGroup;
QuestionTitle;
QuestionType;
Marks;
options;
PauseTime;
WaitTime;
TestName;
TestDescription;
TestVideo;
Question;
Loopid;
Questionoption;
optionloop;
returnmsg;
qno=0;
uniqueIdentifier;
nums:number[] = [1,2,3,3] ;
qnostr;
k;
i;
j;
z;
ticks;
timerinstance;
api:VgAPI;
w;
h;
resl;
return_video;
uid;
public test_data;
public current_time;
public preview_url=0;
lang_test_question;
preview_url_1;
constructor(private _router: Router,private webservice:WebService,private _fb: FormBuilder,public API: VgAPI,public dialog: MdDialog) 
{
  this.createForm();
}
createForm() {
  this.form = this._fb.group({
    name: ['', Validators.required],
    avatar: null
  });
   this.preview_url_1=this.myForm.value.test_url;
}

ngOnInit() {
  const body3={};
  this.webservice.webRequest(this,'get',this.webservice.Language_Available,body3,'3','');
  localStorage.setItem('english',JSON.stringify(true));
  this.test_data={
    "description": "55",
    "name": "151",
    "test_question":[
    {
      "marks":"q1",
      "options":[
        {"Option": "vvv", "skip_time": "11"},
        {"Option": "vvv", "skip_time": "33"}
      ],
      "pause_time":"11",
      "question":"q1",
      "wait_time":"11"
    },
    {
      "marks":"q1",
      "options":[
        {"Option": "vvv", "skip_time": "11"},
        {"Option": "vvv", "skip_time": "11"}
      ],
      "pause_time":"11",
      "question":"q2",
      "wait_time":"11"
    }]
  };
  this.uid=(JSON.parse(localStorage.getItem('user')));
  
this.myForm = this._fb.group({
  uid:[this.uid],
  name:[''],
  description:['',[Validators.required, Validators.minLength(5)]],
  start_time:['',[Validators.required, Validators.minLength(5)]],
  end_time:['',[Validators.required, Validators.minLength(5)]],
  test_duration:['',[Validators.required, Validators.minLength(5)]],
  test_url:['',],
  test_question:this._fb.array([]),
});
const body = {
  // user_id:'32'
};
this.webservice.webRequest(this,'post',this.webservice.get_video_library,body,'2','');


// add address
this.addQuestion();
// this.edit();

/* subscribe to addresses value changes */
// this.myForm.controls['addresses'].valueChanges.subscribe(x => {
//   console.log(x);
// })
  //this.getlocalstrg();
}
logout():void {
  this.webservice.logout();
}
preview_Func(){
    this.preview_url=this.myForm.value.test_url;
    console.log('preview',this.preview_url);
    localStorage.setItem('preview',  JSON.stringify(this.myForm.value));
    localStorage.setItem('preview_refresh',JSON.stringify(1));
    let dialogRef=this.dialog.open(WebPreviewComponent, {
      // disableClose:true,
    });
    dialogRef.afterClosed().subscribe(result => {
    });
 // console.log('data',this.myForm.value);
    // localStorage.setItem('preview',  JSON.stringify(this.myForm.value));
    // console.log('url',this.myForm.value.test_url)
    // this.preview_url=this.myForm.value.test_url;
    // this.api.getDefaultMedia().currentTime=0;
    // var myVideo = document.getElementsByTagName('video')[0];
    // myVideo.src = this.myForm.value.test_url;
    // myVideo.load();
    // myVideo.play();

}
submit_test(){
    // console.log('data',this.myForm.value);
    // localStorage.setItem('preview',  JSON.stringify(this.myForm.value));
    // console.log('url',this.myForm.value.test_url)
    // this.preview_url=this.myForm.value.test_url;
    // this.api.getDefaultMedia().currentTime=0;
    // var myVideo = document.getElementsByTagName('video')[0];
    // myVideo.src = this.myForm.value.test_url;
    // myVideo.load();
    // myVideo.play();
    const body = {
      // user_id:'32'
    };
  this.webservice.webRequest(this,'post',this.webservice.create_test,this.myForm.value,'1','');
}
webresponse(fun_id,return_data){
  if(fun_id==1){
    this.returnmsg = return_data.json();
  }
  else if(fun_id==2){
    this.return_video=return_data.json();
    console.log(this.return_video);
  }
  else if(fun_id==3){
    this.lang_test_question=return_data.json();
    var i;
    for(i=0;i<this.lang_test_question.length;i++)
    {
      this.lang_test_question[i].language_select=false;
    }
    localStorage.setItem('lang_test_question',JSON.stringify(this.lang_test_question));
    console.log('lang_test_question-',this.lang_test_question);
  }
}

initQuestion() {
  return this._fb.group({
     question_id:['2'],
      pause_time: ['', Validators.required],
      wait_time: [''],
      question:[''],
      question1:this._fb.array([]),
      marks:[''],
      options: this._fb.array([]),
  });
}
initlang(){
  return this._fb.group({
     quest:['fff'],
     wer:['fff'],
 });
}
addQuestion() {
  const control = <FormArray>this.myForm.controls['test_question'];
  const addrCtrl = this.initQuestion();
  
  control.push(addrCtrl);

  // this.addOption();
  /* subscribe to individual address value changes */
  // addrCtrl.valueChanges.subscribe(x => {
  //   console.log(x);
  // })
}

edit(){
  for(let i=0;i<this.test_data.test_question.length;i++){
    this.initQuestion_edit(i);
    this.addQuestion_edit(i);
  }
}

initQuestion_edit(i) {
  return this._fb.group({
      question_id:['2'],
      pause_time:[this.test_data.test_question[i].question, Validators.required],
      wait_time:[''],
      question:['sss'],
      marks:[''],
      options:this._fb.array([]),
  });
}

addQuestion_edit(i) {
  const control = <FormArray>this.myForm.controls['test_question'];
  const addrCtrl = this.initQuestion_edit(i);
  console.log("hai",this.fileInput);
  control.push(addrCtrl);
  /// this.addOption();
  /* subscribe to individual address value changes */
  // addrCtrl.valueChanges.subscribe(x => {
  //   console.log(x);
  // })
}

removeQuestion(i: number) {
  const control = <FormArray>this.myForm.controls['test_question'];
  control.removeAt(i);
}

onFileChange(event) {
  let reader = new FileReader();
  if(event.target.files && event.target.files.length > 0) {
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.form.get('avatar').setValue({
        filename: file.name,
        filetype: file.type,
        value: reader.result.split(',')[1]
      })
    };
  }
}

onSubmit() {
  const formModel = this.form.value;
  this.webservice.webRequest(this,'post',this.webservice.create_test,this.myForm.value,'1','');
}

clearFile() {
  this.form.get('avatar').setValue(null);
  this.fileInput.nativeElement.value = '';
}

onPlayerReady(api:VgAPI) {
  this.api = api;
  this.api.getDefaultMedia().subscriptions.ended.subscribe(
    () => {
      // Set the video to the beginning
      this.api.getDefaultMedia().currentTime = 0;
    }
  );
  this.api.getDefaultMedia().subscriptions.seeking.subscribe(
    () => {
      // Set the video to the beginning
      this.current_time=Math.trunc(this.api.getDefaultMedia().currentTime);
      console.log("hai");
    }
  );
}

ngAfterViewInit() {}

doSomething(){
  localStorage.setItem('lang_test_question',JSON.stringify(this.lang_test_question));
}

getlocalstrg(){
  let timer = Observable.timer(1000,1000);
  this.timerinstance = timer.subscribe(t=>{
  });
}
}