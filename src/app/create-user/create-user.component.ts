import { Component, OnInit } from '@angular/core';
import { DxDataGridModule, DxButtonModule, DxDataGridComponent } from 'devextreme-angular';
import {ViewChild } from '@angular/core';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { WebService} from '../webservice/web.service';
import { locale } from 'core-js/library/web/timers';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [WebService]
})
export class CreateUserComponent implements OnInit {
  user_id;
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
  constructor(private webservice: WebService,private _router: Router) {
  }
  ngOnInit() {
    this.uid=(JSON.parse(localStorage.getItem('user')));
    const body1 = {
    user_id:this.uid,
    current_user:0
  };
    this.webservice.webRequest(this,'post',this.webservice.get_users,body1,'1','');
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
    Did:1,
    Org_ID:1,
    Pid:1,
    Zone_Id:1,
    Dept_Id:1,
    MobileNumber:this.MobileNumber,
    Latitud:0,
    Longitud:0,
    Lang_id:1,
    address_line_1:this.address_line_1,
    address_line_2:this.address_line_2,
    city:this.city,
    state:this.state,
    country:this.country,
    pincode:this.pincode
  };
    this.webservice.webRequest(this,'post',this.webservice.UserRegister,body2,'2','');
}

webresponse(fun_id,return_data){
  if(fun_id==1)
  {
        this.returnmsg = return_data.json();
        console.log(this.returnmsg);
  }
  else if(fun_id==2)
  {
    // window.location.reload(true);3
    const body1 = {
      user_id:this.uid,
      current_user:0
    };
      this.webservice.webRequest(this,'post',this.webservice.get_users,body1,'1','');
  }
  else if(fun_id==3)
  {
    window.location.reload(true);
  }
  else if(fun_id==4)
  {
    window.location.reload(true);
  }
  else if(fun_id==5)
  {
    this.returnmsg1 = return_data.json();
    console.log("hai",this.returnmsg1);
    this.User_UName=this.returnmsg1.users.User_UName;
    this.User_Password=this.returnmsg1.users.User_Password;
    this.User_Name=this.returnmsg1.users.User_Name;
    this.User_Lastname=this.returnmsg1.users.User_Lastname;
    this.UserEmail=this.returnmsg1.users.UserEmail;
    this.Did=this.returnmsg1.users.Did;
    this.Org_ID=this.returnmsg1.users.Org_ID;
    this.Pid=this.returnmsg1.users.Pid;
    this.Dept_Id=this.returnmsg1.users.Dept_Id;
    this.Zone_Id=this.returnmsg1.users.Zone_Id;
    this.MobileNumber=this.returnmsg1.users.MobileNumber;
    this.Latitud=this.returnmsg1.users.Latitud;
    this.Longitud=this.returnmsg1.users.Longitud;
    this.Lang_id=this.returnmsg1.users.Lang_id;
    this.address_line_1=this.returnmsg1.users.address_line_1;
    this.address_line_2=this.returnmsg1.users.address_line_2;
    this.city=this.returnmsg1.users.city;
    this.state=this.returnmsg1.users.state;
    this.country=this.returnmsg1.users.country;
    this.pincode=this.returnmsg1.users.pincode;
    console.log("username",this.User_UName);
  }
}
add(){
  const body = {
    User_UName:this.User_UName,
    User_Password:this.User_Password,
    User_Name:this.User_Name,
    User_Lastname:this.User_Lastname,
    UserEmail:this.UserEmail,
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
    this.webservice.webRequest(this,'post',this.webservice.UserRegister,body,'2','');
}
store_id(i){
 this.user_id=i;
 const body1={
  user_id:this.user_id,
  current_user:1
 };
 localStorage.setItem('User_profile',JSON.stringify(this.user_id));
 this.webservice.webRequest(this,'post',this.webservice.get_users,body1,'5','');
 this.navigate_profile();
}
delete(){
  const body2 = {
    user_id:this.user_id
  };
  this.webservice.webRequest(this,'post',this.webservice.delete_user,body2,'3','');
  // window.location.reload(true);
}
edit(){
    const body3 = {
    User_Uid:this.user_id,
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
    this.webservice.webRequest(this,'post',this.webservice.edit_user,body3,'4','');
}
navigate_profile(){
  this._router.navigate(['/user-profile']);
}
}
