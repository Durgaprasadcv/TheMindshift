import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import { WebService,Customer } from '../webservice/web.service';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule  } from '@angular/forms';
import { jsonpFactory } from '@angular/http/src/http_module';
import {VgAPI,VgFullscreenAPI,VgPlayer,VgMedia} from 'videogular2/core';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from "../dialog/dialog.component";
import {ReportComponent} from "../report/report.component";
import { Http , Response } from '@angular/http';
import { ElementRef, HostListener, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import 'assets/video.js'
declare var videoObject: any;
@Component({
  moduleId: module.id,
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {
  @Input('group')
  // contractGroup: FormGroup;
  public myForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
      this.addOption();
  }

  addOption() {
    const emailArray = <FormArray>this.myForm.controls['options'];
    const newEmail = this.initOption();
    emailArray.push(newEmail);
}

removeOption(idx: number) {
    const emailArray = <FormArray>this.myForm.controls['options'];
    emailArray.removeAt(idx);
}

initOption() {
    return this.fb.group({
        Option: '',
        skip_time:''
    });
}
}
