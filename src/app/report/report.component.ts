import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import { WebService } from '../webservice/web.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  providers: [WebService],
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
 report_display=this.data.report;
 return_bar;
  constructor(private route: ActivatedRoute,public dialogRef: MdDialogRef<ReportComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,private _router: Router,private webservice: WebService) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    onNoClick_pause(value): void {
      this.dialogRef.close(value);
    }

  ngOnInit() {
   // this.route.params.subscribe(params => {
    //  let id = Number.parseInt(params['id']);
      //this.person = this.peopleService.get(id);
    //  console.log('data in report',params)
   // });
   this.dialogRef.updateSize('55%', '65%');
   console.log(this.report_display);
   const body1 = {uid:'32'};
   this.webservice.webRequest(this,'post',this.webservice.dashbar,body1,'3','');
  }
  webresponse(fun_id,return_data){
    //  console.log("fid",fun_id,"data",r2.json());
    if(fun_id==3)
    {
      this.return_bar = return_data.json();
      console.log(this.return_bar);
    }
        //  console.log("data",this.returnmsg1.category[0].Test_Mod_Tittle);
    }
  selectvideo(){
    this.dialogRef.close();
  }

}