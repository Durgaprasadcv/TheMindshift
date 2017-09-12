import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  favoriteSeason=999;
  ticks=this.data.timer;
  constructor( 
    public dialogRef: MdDialogRef<DialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
          this.dialogRef.close(this.favoriteSeason);
    }
   ngOnInit() {
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
