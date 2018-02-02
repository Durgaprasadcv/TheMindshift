import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  providers: [WebService],
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  returnmsg;
  returnmsg1

  Zone_Id;
  Zone_Name;
  Zone_code;
  Org_Id;

  constructor(private webservice: WebService) { }

  ngOnInit() {
    this.webservice.webRequest(this,'post',this.webservice.get_zone,'','1','');
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
      this.Zone_Id=this.returnmsg1.Zone_Id;
      this.Zone_Name=this.returnmsg1.Zone_Name;
      this.Zone_code=this.returnmsg1.Zone_code;
      this.Org_Id=this.returnmsg1.Org_Id;
      console.log('name',this.Zone_Name);
    }
  }

  add(){
    const body = {
      Zone_Name:this.Zone_Name,
      Zone_code:this.Zone_code,
      Org_Id:this.Org_Id
    };
      this.webservice.webRequest(this,'post',this.webservice.create_zone,body,'2','');
  }

  store_id(i){
    this.Zone_Id=i;
    const body1={
      Zone_Id:this.Zone_Id
    }
    this.webservice.webRequest(this,'post',this.webservice.get_zone,body1,'5','');
   }

   delete(){
    const body2 = {
      Zone_Id:this.Zone_Id
    };
    this.webservice.webRequest(this,'post',this.webservice.delete_zone,body2,'3','');
    // window.location.reload(true);
  }

  edit(){
    const body3 = {
      Zone_Id:this.Zone_Id,
      Zone_Name:this.Zone_Name,
      Zone_code:this.Zone_code,
      Org_Id:this.Org_Id
    };
      this.webservice.webRequest(this,'post',this.webservice.update_zone,body3,'4','');
  }

  nullify(){
    this.Zone_Id='';
    this.Zone_Name='';
    this.Zone_code='';
    this.Org_Id='';
  }
}
