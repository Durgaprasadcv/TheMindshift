import { Component, OnInit } from '@angular/core';
import { WebService,Customer } from '../webservice/web.service';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule  } from '@angular/forms';
import { jsonpFactory } from '@angular/http/src/http_module';
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
import 'assets/video.js'
declare var videoObject: any;
import {WebPreviewComponent} from "../web-preview/web-preview.component";
import {ViewChild} from '@angular/core';
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
options
PauseTime
WaitTime
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
constructor(private webservice:WebService,private _fb: FormBuilder,public API: VgAPI,public dialog: MdDialog) 
{
  this.createForm();
 }
 createForm() {
  this.form = this._fb.group({
    name: ['', Validators.required],
    avatar: null
  });
}

ngOnInit() { 
this.myForm = this._fb.group({
  name: ['', [Validators.required, Validators.minLength(5)]],
  description: ['', [Validators.required, Validators.minLength(5)]],
  test_question: this._fb.array([]),
});

// add address
this.addQuestion();

/* subscribe to addresses value changes */
// this.myForm.controls['addresses'].valueChanges.subscribe(x => {
//   console.log(x);
// })
  }
  myFunc(){
    const body = {
      // user_id:'32'
    QuestionTitle:this.QuestionTitle,
    QuestionType:this.QuestionType,
    Marks:this.Marks,
    options:4,
    PauseTime:this.PauseTime,
    WaitTime:this.WaitTime,
    TestName:this.TestName,
    TestDescription:this.TestDescription,
    TestVideo:this.TestVideo,
    Question:1,
    Loopid:2,
    Questionoption:this.Questionoption,
    optionloop:1
  };
   this.webservice.webRequest(this,'post',this.webservice.CreateTest,body,'123','');

  }
  myFunc1(){
    let dialogRef=this.dialog.open(WebPreviewComponent, {
      // disableClose:true,
    });
    dialogRef.afterClosed().subscribe(result => {
    } );
}
  myFunc2(){
    console.log('data',this.myForm.value);
  }
  webresponse(fun_id,return_data){
    this.returnmsg = return_data.json();
    console.log('hai');
  }
initQuestion() {
  return this._fb.group({
      pause_time: ['', Validators.required],
      wait_time: [''],
      question:[''],
      marks:[''],
      options: this._fb.array([]),
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
removeQuestion(i: number) {
  const control = <FormArray>this.myForm.controls['test_question'];
  control.removeAt(i);
}

save(model: Customer) {
  // call API to save
  // ...
  console.log(model);
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
  this.loading = true;
  // In a real-world app you'd have a http request / service call here like
  // this.http.post('apiUrl', formModel)
  setTimeout(() => {
    console.log(formModel);
    alert('done!');
    this.loading = false;
  }, 1000);
}

clearFile() {
  this.form.get('avatar').setValue(null);
  this.fileInput.nativeElement.value = '';
}
}
