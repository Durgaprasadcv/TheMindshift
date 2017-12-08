import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  providers: [WebService],
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
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
i;
  constructor(private webservice:WebService) { }

  ngOnInit() { }
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
     for(this.i=0;this.i<this.qno;this.i++)
     {
      var x = ((document.getElementById(this.i+1) as HTMLInputElement).value);
      console.log(x,'total',this.qnostr);
     }
  }
  webresponse(fun_id,return_data){
    this.returnmsg = return_data.json();
    console.log('hai');
  }
}
