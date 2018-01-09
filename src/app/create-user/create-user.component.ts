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
  //user register component
  User_UName;
  User_Password;
  User_Name;
  User_Lastname;
  UserEmail;
  Did;
  Org_ID;
  Pid;
  Dept_Id;
  Zone_Id;
  MobileNumber;
  Latitud;
  Longitud;
  Lang_id;
  address_line_1;
  address_line_2;
  city;
  state;
  country;
  pincode;

  username;

  uid;
  returnmsg;
  returnmsg1;
  dataSource: any[];
    states: any[];
  constructor(private webservice: WebService) {
  }
  ngOnInit() {
    this.uid=(JSON.parse(localStorage.getItem('user')));
    const body1 = {user_id:this.uid};
    this.webservice.webRequest(this,'post',this.webservice.get_users,body1,'1','');
  }
  webresponse(fun_id,return_data){
    //  console.log("fid",fun_id,"data",r2.json());
    if(fun_id==1)
    {
          this.returnmsg = return_data.json();
         // console.log('return_msg',this.returnmsg);
    }
    else if(fun_id==2)
    {
          this.returnmsg1 = return_data.json();
          console.log('return_msg',this.returnmsg1);
    }
  }
edit(){
  alert("Edit");
}
delete(){
  alert("delete");
}
add_user(){
  alert(this.username);
  console.log(this.username);
  const body2 = {
    User_UName:this.User_UName,
    User_Password:this.User_Password,
    User_Name:this.User_Name,
    User_Lastname:this.User_Lastname,
    UserEmail:this.UserEmail,
    // Did:this.Did,
    // Org_ID:this.Org_ID,
    // Pid:this.Pid,
    // Dept_Id:this.Dept_Id,
    // Zone_Id:this.Zone_Id,
    Did:"1",
    Org_ID:"1",
    Pid:"1",
    Dept_Id:"1",
    Zone_Id:this.Zone_Id,
    MobileNumber:this.MobileNumber,
    Latitud:"0",
    Longitud:"0",
    Lang_id:"0",
    address_line_1:this.address_line_1,
    address_line_2:this.address_line_2,
    city:this.city,
    state:this.state,
    country:this.country,
    pincode:this.pincode
  };
    this.webservice.webRequest(this,'post',this.webservice.UserRegister,body2,'2','');
}
}
