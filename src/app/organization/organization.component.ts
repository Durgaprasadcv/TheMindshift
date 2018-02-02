import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  providers: [WebService],
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  returnmsg;
  returnmsg1

  id;
  name;
  display_name;
  reg_info;
  contact_person;
  logo_path;
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
    this.webservice.webRequest(this,'post',this.webservice.get_org,'','1','');
    var art="arthikrao";
    console.log('index',art.indexOf("h"));
  }
  webresponse(fun_id,return_data){
    if(fun_id==1){
      this.returnmsg = return_data.json();
      console.log(this.returnmsg);
    }
    else if(fun_id==2){
      window.location.reload(true);
    }
    else if(fun_id==3){
      window.location.reload(true);
    }
    else if(fun_id==4){
      window.location.reload(true);
    }
    else if(fun_id==5){
      this.returnmsg1 = return_data.json();
      this.name=this.returnmsg1.name;
      this.display_name=this.returnmsg1.display_name;
      this.reg_info=this.returnmsg1.reg_info;
      this.contact_person=this.returnmsg1.contact_person;
      this.logo_path=this.returnmsg1.logo_path
      this.address_line_1=this.returnmsg1.address_line_1;
      this.address_line_2=this.returnmsg1.address_line_2;
      this.city=this.returnmsg1.city;
      this.state=this.returnmsg1.state;
      this.country=this.returnmsg1.country;
      this.pincode=this.returnmsg1.pincode;
      this.email=this.returnmsg1.email;
      this.contact_no=this.returnmsg1.contact_no;
      console.log('name',this.name);
    }
  }
  add(){
    const body = {
      name:this.name,
      display_name:this.display_name,
      logo_path:this.logo_path,
      reg_info:this.reg_info,
      contact_person:this.contact_person,
      address_line_1:this.address_line_1,
      address_line_2:this.address_line_2,
      city:this.city,
      state:this.state,
      country:this.country,
      pincode:this.pincode,
      email:this.email,
      contact_no:this.contact_no
    };
      this.webservice.webRequest(this,'post',this.webservice.create_org,body,'2','');
  }
  store_id(i){
   this.id=i;
   const body1={
    id:this.id
   }
   this.webservice.webRequest(this,'post',this.webservice.get_org,body1,'5','');
  }
  delete(){
    const body2 = {
      id:this.id
    };
    this.webservice.webRequest(this,'post',this.webservice.delete_org,body2,'3','');
    // window.location.reload(true);
  }
  edit(){
    const body3 = {
      id:this.id,
      name:this.name,
      display_name:this.display_name,
      logo_path:this.logo_path,
      reg_info:this.reg_info,
      contact_person:this.contact_person,
      address_line_1:this.address_line_1,
      address_line_2:this.address_line_2,
      city:this.city,
      state:this.state,
      country:this.country,
      pincode:this.pincode,
      email:this.email,
      contact_no:this.contact_no
    };
      this.webservice.webRequest(this,'post',this.webservice.update_org,body3,'4','');
  }
  nullify(){
    this.name='';
      this.display_name='';
      this.reg_info='';
      this.contact_person='';
      this.logo_path='';
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
