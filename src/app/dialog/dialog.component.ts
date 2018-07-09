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
  tic1=10;
  submit_show=0;
  prog_bar=0;
  constructor(
    public dialogRef: MdDialogRef<DialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }
    onNoClick(result): void {
          //  this.dialogRef.close(this.result);
          if(result!=999){
            // document.getElementById("pb").style.display = "block";
            // this.tic1=0;
            // this.submit_show=1;
            // this.prog_bar=0;
            // let timer = Observable.timer(1000,100);
            // timer.subscribe(t=>{this.tic1=this.tic1+1;
            // this.prog_bar=this.prog_bar+1;
            // document.getElementById("pb1").style.width=this.prog_bar+'%';
            //console.log(this.prog_bar);
            // if(this.prog_bar==101)
            // {
              // if(this.data.ans.type_options[this.result].id==this.data.ans.answers){
              //   document.getElementById("pb").style.display = "none";
              //   console.log('fro dialog, correct');
              //   this.c_answer=1;
              //   this.w_answer=0;
              //   this.tic=0;
              // }
              // else{
              //   document.getElementById("pb").style.display = "none";
              //   console.log('fro dialog, wrong');
              //   this.w_answer=1;
              //   this.c_answer=0;
              //   this.tic=0;
              // }
            // }
          // });
            // let timer = Observable.timer(1000,1000);
            // timer.subscribe(t=>{this.tic=this.tic+1;
            // if(this.tic==2)
            // {
              this.dialogRef.close(this.result);
            // }});
          }
    }
   ngOnInit() {
    document.getElementById("pb").style.display = "none";
    this.dialogRef.updateSize('80%', '90%');
    let timer = Observable.timer(1000,1000);
    timer.subscribe(t=>{this.ticks=this.ticks-1;
    if(this.ticks==0)
    {
      this.dialogRef.close(999);
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
