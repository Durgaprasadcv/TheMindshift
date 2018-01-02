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
@Component({
  moduleId: module.id,
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  providers: [WebService],
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  public myForm: FormGroup;
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
  constructor(private webservice:WebService,private _fb: FormBuilder) { }

  ngOnInit() { 
this.myForm = this._fb.group({
  name: ['', [Validators.required, Validators.minLength(5)]],
  description: ['', [Validators.required, Validators.minLength(5)]],
  addresses: this._fb.array([])
});

// add address
this.addAddress();

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
    this.qno++
    this.qnostr=String(this.qno);
    var para = document.createElement("input");
    para.setAttribute("id", this.qnostr);
    var element = document.getElementById("div1");
    element.appendChild(para);
  }
  myFunc2(){
    //  for(this.k=0;this.k<this.qno;this.k++)
    //  {
    //   var x = ((document.getElementById(this.k+1) as HTMLInputElement).value);
    //   console.log(x,'total',this.qnostr);
    //  }
    console.log('data',this.myForm.value);
  }
  webresponse(fun_id,return_data){
    this.returnmsg = return_data.json();
    console.log('hai');
  }
initAddress() {
  return this._fb.group({
      pause_time: ['', Validators.required],
      wait_time: [''],
      question:[''],
      marks:[''],
      option_no:['']
  });
}

addAddress() {
  const control = <FormArray>this.myForm.controls['addresses'];
  const addrCtrl = this.initAddress();
  
  control.push(addrCtrl);
  
  /* subscribe to individual address value changes */
  // addrCtrl.valueChanges.subscribe(x => {
  //   console.log(x);
  // })
}

removeAddress(i: number) {
  const control = <FormArray>this.myForm.controls['addresses'];
  control.removeAt(i);
}

save(model: Customer) {
  // call API to save
  // ...
  console.log(model);
}
}
