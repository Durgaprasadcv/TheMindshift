import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import {MdSelectModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import{FormsModule,ReactiveFormsModule,FormControl} from '@angular/forms';
import {NativeDateAdapter,DateAdapter} from '@angular/material';
import * as $ from 'jquery/dist/fm.selectator.jquery.js';
@Component({
  selector: 'app-assign-test',
  templateUrl: './assign-test.component.html',
  providers: [MdNativeDateModule],
  styleUrls: ['./assign-test.component.css']
})
export class AssignTestComponent implements OnInit {
  users = [
    {value: 'steak-0', viewValue: '001'},
    {value: 'pizza-1', viewValue: '002'},
    {value: 'tacos-2', viewValue: '003'}
  ];
  tests=[
    {value: 'steak-0', viewValue: 'Test 1'},
    {value: 'pizza-1', viewValue: 'Test 2'},
    {value: 'tacos-2', viewValue: 'Test 3'}
  ]
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('#multiple').selectator({
      showAllOptionsOnFocus: true,
      searchFields: 'value text subtitle right'
    });
  }
}
