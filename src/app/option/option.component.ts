import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  @Input('group') myForm: FormGroup;
  constructor() { }
  ngOnInit() {
  }
}