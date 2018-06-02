import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable} from 'rxjs/Rx';
@Component({
  moduleId: module.id,
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  english=0;
  kannada=0;
  malayalam=0;
  telugu=0;
  tamil=0;
  timerinstance;
  @Input('group') myForm: FormGroup;
  constructor() { }
  ngOnInit() {
    this.getlocalstrg();
  }
  getlocalstrg(){
    let timer = Observable.timer(1000,1000);
    this.timerinstance = timer.subscribe(t=>{
    this.english=(JSON.parse(localStorage.getItem('english')));
    this.kannada=(JSON.parse(localStorage.getItem('kannada')));
    this.malayalam=(JSON.parse(localStorage.getItem('malayalam')));
    this.telugu=(JSON.parse(localStorage.getItem('telugu')));
    this.tamil=(JSON.parse(localStorage.getItem('tamil')));
    console.log('change');
    });
  }
}