import { Component, OnInit } from '@angular/core';
import { DxDataGridModule, DxButtonModule, DxDataGridComponent } from 'devextreme-angular';
import {ViewChild } from '@angular/core';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { WebService, Employee, State } from '../webservice/web.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [WebService]
})
export class CreateUserComponent implements OnInit {

  dataSource: any[];
    states: any[];
  constructor(service: WebService) {
  }
  ngOnInit() {
  }
edit(){
  alert("Edit");
}
delete(){
  alert("delete");
}

}
