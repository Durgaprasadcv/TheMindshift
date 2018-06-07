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
  timerinstance;
  lang_test_question;
  @Input('group') myForm: FormGroup;
  constructor() { }
  ngOnInit() {
    this.getlocalstrg();
  }
  getlocalstrg(){
    let timer = Observable.timer(1000,1000);
    this.timerinstance = timer.subscribe(t=>{
    this.lang_test_question=(JSON.parse(localStorage.getItem('lang_test_question')));
    });
  }
}