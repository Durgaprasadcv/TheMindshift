import { Component, OnInit } from '@angular/core';
import { WebService} from '../webservice/web.service';
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
import {WebPreviewComponent} from "../web-preview/web-preview.component";
import {ViewChild} from '@angular/core';
import 'assets/bcarousel.js'
declare var bcarouselObject: any;
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-video-table',
  templateUrl: './video-table.component.html',
  styleUrls: ['./video-table.component.css']
})
export class VideoTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  edit(){
    alert("Edit");
  }
  delete(){
    alert("delete");
  }
}
