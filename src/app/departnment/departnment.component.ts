import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-departnment',
  templateUrl: './departnment.component.html',
  providers: [WebService],
  styleUrls: ['./departnment.component.css']
})
export class DepartnmentComponent implements OnInit {
  returnmsg;
  returnmsg1
  Dept_Id;
  Dept_Name;
  Dept_Desp;
  Dept_Code;
  Dept_Org_ID;
  address_line_1;
  address_line_2;
  city;
  state;
  country;
  pincode;
  email;
  contact_no;
  constructor(private webservice: WebService) { }

  ngOnInit() {
    this.webservice.webRequest(this,'post',this.webservice.get_dept,'','1','');
  }
  ngAfterViewInit() {
  
  }
  webresponse(fun_id,return_data){
    if(fun_id==1){
      this.returnmsg = return_data.json();
      console.log(this.returnmsg);
    }
    else if(fun_id==2){
      this.webservice.webRequest(this,'post',this.webservice.get_dept,'','1','');
    }
    else if(fun_id==3){
      // window.location.reload(true);
      this.webservice.webRequest(this,'post',this.webservice.get_dept,'','1','');
    }
    else if(fun_id==4){
      // window.location.reload(true);
      this.webservice.webRequest(this,'post',this.webservice.get_dept,'','1','');
    }
    else if(fun_id==5){
      this.returnmsg1 = return_data.json();
      this.Dept_Name=this.returnmsg1.Dept_Name;
      this.Dept_Desp=this.returnmsg1.Dept_Desp;
      this.Dept_Code=this.returnmsg1.Dept_Code;
      this.Dept_Org_ID=this.returnmsg1.Dept_Org_ID;
      this.address_line_1=this.returnmsg1.address_line_1;
      this.address_line_2=this.returnmsg1.address_line_2;
      this.city=this.returnmsg1.city;
      this.state=this.returnmsg1.state;
      this.country=this.returnmsg1.country;
      this.pincode=this.returnmsg1.pincode;
      this.email=this.returnmsg1.email;
      this.contact_no=this.returnmsg1.contact_no;
    }
  }
  add(){
    const body = {
      Dept_Name:this.Dept_Name,
      Dept_Desp:this.Dept_Desp,
      Dept_Code:this.Dept_Code,
      Dept_Org_ID:this.Dept_Org_ID,
      address_line_1:this.address_line_1,
      address_line_2:this.address_line_2,
      city:this.city,
      state:this.state,
      country:this.country,
      pincode:this.pincode,
      email:this.email,
      contact_no:this.contact_no
    };
      this.webservice.webRequest(this,'post',this.webservice.create_dept,body,'2','');
  }
  store_id(i){
   this.Dept_Id=i;
   const body1={
    Dept_Id:this.Dept_Id
   }
   this.webservice.webRequest(this,'post',this.webservice.get_dept,body1,'5','');
  }
  delete(){
    const body2 = {
      Dept_Id:this.Dept_Id
    };
    this.webservice.webRequest(this,'post',this.webservice.delete_dept,body2,'3','');
  }
  edit(){
    const body3 = {
      Dept_Id:this.Dept_Id,
      Dept_Name:this.Dept_Name,
      Dept_Desp:this.Dept_Desp,
      Dept_Code:this.Dept_Code,
      Dept_Org_ID:this.Dept_Org_ID,
      address_line_1:this.address_line_1,
      address_line_2:this.address_line_2,
      city:this.city,
      state:this.state,
      country:this.country,
      pincode:this.pincode,
      email:this.email,
      contact_no:this.contact_no
    };
      this.webservice.webRequest(this,'post',this.webservice.update_dept,body3,'4','');
  }
  nullify(){
    this.Dept_Id='';
    this.Dept_Name='';
    this.Dept_Desp='';
    this.Dept_Code='';
    this.Dept_Org_ID='';
    this.address_line_1='';
    this.address_line_2='';
    this.city='';
    this.state='';
    this.country='';
    this.pincode='';
    this.email='';
    this.contact_no='';
  }
}