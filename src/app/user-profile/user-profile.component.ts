import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import{MdSelectModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import{FormsModule,ReactiveFormsModule,FormControl} from '@angular/forms';
import{NativeDateAdapter,DateAdapter} from '@angular/material';
import { WebService} from '../webservice/web.service';
import * as $  from 'jquery';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [WebService]
})
export class UserProfileComponent implements OnInit {
  itemList = [];
  selectedItems = [];
  settings = {};

  returnuser;

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

  show=0;
  constructor(private webservice: WebService) { }

  ngOnInit() {
    this.itemList = [
      {"id":1,"itemName":"Test 1","capital":"Sales","image":"http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"},
      {"id":2,"itemName":"Test 2", "capital":"Communication","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"},
      {"id":3,"itemName":"Test 3", "capital":" Customer Service","image":"http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"},
      {"id":4,"itemName":"Test 4","capital":"Team Work","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"},
      {"id":5,"itemName":"Test 5","capital":"Product","image":"http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg"},    
      {"id":6,"itemName":"Test 6","capital":"Communication","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"}                      
    ];

this.selectedItems = [
      {"id":1,"itemName":"Test 1"},
      {"id":2,"itemName":"Test 2"},
      {"id":3,"itemName":"Test 3"},
      {"id":4,"itemName":"Test 4"}];
this.settings = { 
          text:"Select Users",
          selectAllText:'Select All Users',
          unSelectAllText:'UnSelect All Users',
          enableSearchFilter: true,
          classes:"myclass custom-class",
          showCheckbox: true
        };
        const body = {
          user_id:4,
          current_user:1
        };
        this.webservice.webRequest(this,'post',this.webservice.get_users,body,'1','');
  }

  webresponse(fun_id,return_data){
    if(fun_id==1)
    {
          this.returnuser = return_data.json();
          console.log(this.returnuser);
          this.User_UName=this.returnuser.users.User_UName;
          this.User_Password=this.returnuser.users.User_Password;
          this.User_Name=this.returnuser.users.User_Name;
          this.User_Lastname=this.returnuser.users.User_Lastname;
          this.UserEmail=this.returnuser.users.UserEmail;
          this.Did=this.returnuser.users.Did;
          this.Org_ID=this.returnuser.users.Org_ID;
          this.Pid=this.returnuser.users.Pid;
          this.Dept_Id=this.returnuser.users.Dept_Id;
          this.Zone_Id=this.returnuser.users.Zone_Id;
          this.MobileNumber=this.returnuser.users.MobileNumber;
          this.Latitud=this.returnuser.users.Latitud;
          this.Longitud=this.returnuser.users.Longitud;
          this.Lang_id=this.returnuser.users.Lang_id;
          this.address_line_1=this.returnuser.users.address_line_1;
          this.address_line_2=this.returnuser.users.address_line_2;
          this.city=this.returnuser.users.city;
          this.state=this.returnuser.users.state;
          this.country=this.returnuser.users.country;
          this.pincode=this.returnuser.users.pincode;
          console.log("username",this.User_UName)
    }
  }

  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any){
    console.log(items);
  }
  onDeSelectAll(items: any){
    console.log(items);
  }

  ngAfterViewInit() {
}
editable(){
  this.show=1;
  console.log(this.show);
}
uneditable(){
  this.show=0;
  console.log(this.show);
}
}