import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import { WebService } from '../webservice/web.service';
import {RatingModule} from "ngx-rating";
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  providers: [WebService],
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
starsCount: number;
 report_display=this.data.report;
 return_bar;
 uid;
 return_result={contrl:0, feedback:0 };

  constructor(private route: ActivatedRoute,public dialogRef: MdDialogRef<ReportComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,private _router: Router,private webservice: WebService) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    onNoClick_pause(value): void {
      this.dialogRef.close(value);
    }

  ngOnInit() {
    this.uid=(JSON.parse(localStorage.getItem('user')));
   // this.route.params.subscribe(params => {
    //  let id = Number.parseInt(params['id']);
      //this.person = this.peopleService.get(id);
    //  console.log('data in report',params)
   // });
   this.dialogRef.updateSize('55%', '65%');
   console.log(this.report_display);
   const body1 = {uid:this.uid};
   this.webservice.webRequest(this,'post',this.webservice.dashbar,body1,'3','');
  }
  webresponse(fun_id,return_data){
    if(fun_id==3)
    {
      this.return_bar = return_data.json();
      console.log(this.return_bar);
    }
    }
  selectvideo(button_value):void{
    // 0=home 1=replay 2=next
    this.return_result.contrl=button_value;
    this.return_result.feedback=this.starsCount;
    this.dialogRef.close(this.return_result);
    console.log(this.starsCount);
  }

}