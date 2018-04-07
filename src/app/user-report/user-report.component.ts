import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  providers: [WebService],
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {
  Dat;
  public from = false;
  searchText;
  slic:number;
  DUE_Date=[];
  bold=0;
  bol=0;
  Pending=[];
  uid=4;
  assLen;
  assign_lt:number;
  returnmsg;
  sll="27/3/2019";
  slice;
  Dat1;
  dat;
  assLen1;
  t;
  Name;
  coml;
  comll;
  Due;
  Dud;
  comlp;
  // sll;
  sll1;
  sll2;
  retr;
  Duedate;
  Duedate1;
  assLen2;
  red=0;
  green=0;
  blue=1;
  slla;
  ganesh=3;
  asssgn_coml;
  asign_complt1;
  asign_complte2;
  sllb;
  sllc;
  assigne;
  assgn_compl;
  Descript;
  array;
  Ass_Dte;
  duee_dte;
  a1;
  b1;
  filter=3;
    constructor(private webservice: WebService, private _router: Router) {
  
    }
    public report_page = true;
    ngOnInit() {
      this.ganesh == 3;
      this.returnmsg = this.retr;
  // alert(this.searchText);
  const body = {user_id:this.uid};
      this.webservice.webRequest(this,'post',this.webservice.test,body,'1','');
      var dd =this.json.length;
    // console.log('Json Dataz',dd);
   for(var n=0;n<dd;n++){
    this.Ass_Dte = this.json[n].Assigned_date;
  
  
    //  console.log('Assined Dte',this.due_dte);Invalid Date
  }
   for(var t=0;t<dd;t++){
    this.duee_dte = this.json[t].Due_dat;
    console.log('Due Dte',this.duee_dte);
  }
   this.Ass_Dte = new Date(this.Ass_Dte);
   this.Ass_Dte = new Date(this.Ass_Dte);
   console.log("As _DAte",this.Ass_Dte);
   console.log("Due_dte",this.duee_dte);
  }
  
    webresponse(fun_id,return_data){
      if(fun_id==1)
      {
        this.returnmsg = return_data.json();
  
        // this.returnmsg = false;
        // this.incomplte();
        console.log('api12',this.returnmsg);
  
        this.array = this.returnmsg.test.length;
        // console.log('arry',this.array);
        for(var x=0;x<this.array;x++){
          this.assigne=this.returnmsg.test[x].Assigned_test_Due_date;
          this.assgn_compl=this.returnmsg.test[x].Assigned_test_Completed_on;
          this.assigne = new Date(this.assigne);
          console.log('assigne_test_Due_date',this.assigne);
          this.assgn_compl=new Date(this.assgn_compl);
          console.log('assgn_compl',this.assgn_compl);
          if(this.assigne >  this.assgn_compl){
            console.log('true');
            return this.a1;
            // console.log('true');
          } else if(this.assigne < this.assgn_compl){
            console.log('false');
            return this.b1;
            // console.log('false');
          }
          // this.assLen = this.assigne.slice(0,4);
          // console.log('asslen',this.assLen);
          // this.assLen1=this.assigne.slice(5,7);
          // console.log('assLen1',this.assLen1);
          // this.assLen2=this.assigne.slice(8,10);
          // console.log('assLen2',this.assLen2);
          // this.assign_lt = assLen2 /assLen2/assLen;
          // +'/'+assLen1+'/'+assLen;
          // console.log('Assig Due Dte',this.assign_lt);
          // Assigned_test_Completed_on
  
  
  
          // for(var  r=0;r<this.array;r++){
          //   this.assgn_compl=this.returnmsg.test[r].Assigned_test_Completed_on;
          //   this.Name=this.returnmsg.test[r].test_name;
            // console.log('name',this.Name);
            // this.Descript=this.returnmsg.test[r].test_description;
            // console.log('Description',this.Descript);
  
            // console.log('Assined Complted',this.assgn_compl);
            // this.assgn_compl=new Date(this.assgn_compl);
            // console.log('assgn_compl',this.assgn_compl);
            // this.asssgn_coml = this.assgn_compl.slice(0,4);
            // console.log('assgn_log',this.asssgn_coml);
            // this.asign_complt1=this.assgn_compl.slice(5,7);
            // console.log('asign_compl1',this.asign_complt1);
            // this.asign_complte2 = this.assgn_compl.slice(8,10);
            // console.log('asign_complte2',this.asign_complte2);
  
          // if(this.assLen > this.assgn_compl && this.assLen1 > this.asign_complt1 && this.assLen2 > this.asign_complte2){
            // if(this.assLen > this.assgn_compl && this.assLen1>this.asign_complt1 && this.assLen2 > this.asign_complte2){
            // if(1){
            // this.Pending[this.bold].Assigned_test_Completed_on= this.assgn_compl;
            // this.Pending[this.bold].test_description =this.returnmsg.test[r].test_description;
            // this.Pending[this.bold].test_name= this.returnmsg.test[r].test_name;
            // this.bold++;
            // }
            // if(this.assLen < this.assgn_compl && this.assLen1 < this.asign_complt1 && this.assLen2 < this.asign_complte2){
            //   this.DUE_Date[this.bol].Assigned_test_Completed_on=this.assgn_compl;
            //   this.DUE_Date[this.bol].test_description = this.returnmsg.test[r].test_description;
            //   this.DUE_Date[this.bol].test_name = this.returnmsg.test[r].test_name;
            //   this.bol++;
  
         }
  
      }
  
      }
    incomplte(){
      this.coml =true;
      this.comlp = false;
      this.comll = false;
          this.red=1;
          this.green=0;
          this.blue=0;
          this.a1 = true;
          // this.slla=this.Pending;
          // this.returnmsg.test=this.returnmsg;
          this.sllb=0;
          this.ganesh=2;
          this.sllc=0;
          // console.log('length',this.returnmsg);
          this.filter= 1;
  
        }
    Complte(){
  
  this.coml =false;
  this.comlp = true;
  this.comll =false;
  this.b1 =  true;
      this.red=0;
      this.green=1;
      this.blue=0;
      this.slla=0;
      // this.sllb=this.DUE_Date;
      // this.returnmsg.test=this.returnmsg;
      this.sllc=0;
      this.ganesh=1;
      // console.log('return',this.returnmsg);
      this.filter= 2;
      }
     AllTask(){
  
      this.comll = true;
      this.comlp = false;
      this.coml = false;
      this.red = 0;
      this.green = 0;
      this.blue = 1;
      this.slla = 0;
      this.ganesh = 3;
      this.sllb = 0;
      this.sllc=this.sll;
      this.filter= 3;
    }
    test_detail()
    {
      this._router.navigate(['/test-detail']);
    }
    json=[
      {name:"Mathematics",desci:"floows and rules",Assigned_date:"12/03/2018", Due_dat:"11/03/2017",valu:1},
      {name:"Science",desci:"flows and rules",Assigned_date:"12/02/2018", Due_dat:"11/03/2016",valu:1},
      {name:"Global science",desci:"floows and rules",Assigned_date:"12/09/2018", Due_dat:"1/07/2015",valu:2},
      {name:"Environment and science",desci:"floows and rules",Assigned_date:"12/07/2018", Due_dat:"1/03/2018",valu:2},
      {name:"Bussince",desci:"Siblings and rules",Assigned_date:"12/07/2018", Due_dat:"22/03/2018",valu:2},
    ]
  
     ELEMENT_DATA: Element[] = [
    {position:7, name: 'Maths',    symbol:'H', dat:"26-03-2015"},
    {position:2, name: 'Scinence', symbol:'He',dat:"12-11-2014"},
    {position:3, name: 'English',  symbol:'Li',dat:"02-09-2015"},
    ];
  }
  export interface Element {
    name: string;
    position: number;
    symbol: string;
    dat: string;
}