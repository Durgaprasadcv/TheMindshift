import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
 report_display=this.data.report;
  constructor(private route: ActivatedRoute,public dialogRef: MdDialogRef<ReportComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }
  
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
  }

}