import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  width=250;
  super_user_id=0;
  partner_id=0;
  company_id=0;
  admin_id=0;
  constructor() { }

  ngOnInit() {
  }
  openNav() {
    this.width=250;
  }
  closeNav() {
    this.width=0;
  }
  super_user(){
    this.super_user_id=1;
    this.partner_id=0;
    this.company_id=0;
    this.admin_id=0;
  }
  partner(){
    this.super_user_id=0;
    this.partner_id=1;
    this.company_id=0;
    this.admin_id=0;
  }
  company(){
    this.super_user_id=0;
    this.partner_id=0;
    this.company_id=1;
    this.admin_id=0;
  }
  admin(){
    this.super_user_id=0;
    this.partner_id=0;
    this.company_id=0;
    this.admin_id=1;
  }
}
