import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  result=999;
  ticks=this.data.timer;
  w_answer=0;
  c_answer=0;
  tic=10;
  constructor( 
    public dialogRef: MdDialogRef<DialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }
    onNoClick(result): void {
          //  this.dialogRef.close(this.result);
            if(this.data.ans.type_options[this.result].id==this.data.ans.answers)
            {
              console.log('fro dialog, correct');
              this.c_answer=1;
              this.w_answer=0;
              this.tic=0;
            }
            else{
              console.log('fro dialog, wrong');
              this.w_answer=1;
              this.c_answer=0;
              this.tic=0;
            }
            let timer = Observable.timer(1000,1000);
            timer.subscribe(t=>{this.tic=this.tic+1;
            if(this.tic==2)
            {
              this.dialogRef.close(this.result);
            }});
    }
   ngOnInit() {
    this.dialogRef.updateSize('80%', '90%');
    let timer = Observable.timer(1000,1000);
    timer.subscribe(t=>{this.ticks=this.ticks-1;
    if(this.ticks==0)
    {
      this.dialogRef.close(999);
      if(this.data.ans.type_options[this.result].id==this.data.ans.answers)
      {
        console.log('fro dialog, correct');
      }
      else{
        console.log('fro dialog, wrong');
      }
    }});
  }

}
@Component({
  selector: 'dialog-data-example-dialog',
  template: '<h1>hai</h1>'
})
export class DialogDataExampleDialog {
  constructor() {}
}
