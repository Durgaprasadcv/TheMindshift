import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import { WebService} from '../webservice/web.service';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule  } from '@angular/forms';
import { jsonpFactory } from '@angular/http/src/http_module';
import { VgAPI,VgFullscreenAPI,VgPlayer,VgMedia} from 'videogular2/core';
import { Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import { MdDialog, MD_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from "../dialog/dialog.component";
import { ReportComponent } from "../report/report.component";
import { Http,Response } from '@angular/http';
import { ElementRef,HostListener,OnDestroy,ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { CreateTestComponent } from "../create-test/create-test.component";
// import 'assets/video.js'
// declare var videoObject: any;
@Component({
  moduleId: module.id,
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  providers: [CreateTestComponent,WebService],
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {
  uid;  
  returnmsg;
  timerinstance;
  @Input('group')
  // contractGroup: FormGroup;
  public myForm: FormGroup;
  lang_test_question;
  constructor(private fb: FormBuilder,private CreateTest:CreateTestComponent,private webservice: WebService) { }
  
ngOnInit() {  
  this.uid=(JSON.parse(localStorage.getItem('user')));
  this.lang_test_question=(JSON.parse(localStorage.getItem('lang_test_question')));

  const body = {user_id:this.uid};
  this.webservice.webRequest(this,'post',this.webservice.modules,body,'1','');
  this.addOption();
  this.addOption();
      /* subscribe to addresses value changes */
  this.myForm.controls['options'].valueChanges.subscribe(x => {
  console.log(x);
})
console.log("control",this.myForm.controls.options.parent.value.question);
this.getlocalstrg();
var i;
for(i=0;i<this.lang_test_question.length;i++)
{
    const test_lang = <FormArray>this.myForm.controls['question1'];
    const test_lang_creat = this.test_lang_creat(this.lang_test_question[i].Lang_Id);
    test_lang.push(test_lang_creat);
}
}

addOption() {
  const emailArray = <FormArray>this.myForm.controls['options'];
  const newEmail = this.initOption();
  emailArray.push(newEmail);
}

removeOption(idx: number) {
    const emailArray = <FormArray>this.myForm.controls['options'];
    emailArray.removeAt(idx);
}

initOption() {
    return this.fb.group({
        Option: '',
        skip_time:''
    });
}
test_lang_creat(i){
  return this.fb.group({
    lang_id:i,
    question: ''
});
}

// initOption() {
//   if(this.myForm.controls.options.parent.value.question==0){
//     return this.fb.group({
//       Option: this.myForm.controls.options.parent.value.question_id,
//       skip_time:this.myForm.controls.options.parent.value.question
//   });
//   }
//   else  if(this.myForm.controls.options.parent.value.question==1){
//     return this.fb.group({
//       Option: 'abc1',
//       skip_time:'abc1'
//   });
//   }
//   else  if(this.myForm.controls.options.parent.value.question==2){
//     return this.fb.group({
//       Option: 'abc2',
//       skip_time:'abc2'
//   });
//   }
    
// }
webresponse(fun_id,return_data){
  if(fun_id==1)
  {
    this.returnmsg = return_data.json();
    console.log('api',this.returnmsg);
  }
}
getlocalstrg(){
  let timer = Observable.timer(1000,1000);
  this.timerinstance = timer.subscribe(t=>{
  this.lang_test_question=(JSON.parse(localStorage.getItem('lang_test_question')));  
  //console.log('change');
  });
}

}