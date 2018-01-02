import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {
  @Input('group')
  public adressForm: FormGroup;
  constructor() { }
  
  ngOnInit() {
  }

}
