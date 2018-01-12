import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  providers: [WebService],
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  returnmsg;
  returnmsg1
  Designation_Name;
  Designation_Disp_Name;
  Designation_code;
  Designation_Level;
  Designation_OrgID;
  Designation_Id;
  constructor(private webservice: WebService) { }

  ngOnInit() {
    this.webservice.webRequest(this,'post',this.webservice.get_designation,'','1','');
  }
  webresponse(fun_id,return_data){
    if(fun_id==1)
    {
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
      this.Designation_Name=this.returnmsg1.Designation_Name;
      this.Designation_Disp_Name=this.returnmsg1.Designation_Disp_Name;
      this.Designation_code=this.returnmsg1.Designation_code;
      this.Designation_Level=this.returnmsg1.Designation_Level;
      this.Designation_OrgID=this.returnmsg1.Designation_OrgID;
    }
  }
  add_designation(){
    const body = {
      Designation_Name:this.Designation_Name,
      Designation_Disp_Name:this.Designation_Disp_Name,
      Designation_code:this.Designation_code,
      Designation_Level:this.Designation_Level,
      Designation_OrgID:this.Designation_OrgID
    };
      this.webservice.webRequest(this,'post',this.webservice.create_designation,body,'2','');
  }
  store_designation_id(i){
   this.Designation_Id=i;
   const body1={
    Designation_Id:this.Designation_Id
   }
   this.webservice.webRequest(this,'post',this.webservice.get_designation,body1,'5','');
  }
  delete(){
    const body2 = {
      Designation_Id:this.Designation_Id
    };
    this.webservice.webRequest(this,'post',this.webservice.delete_designation,body2,'3','');
    // window.location.reload(true);
  }
  edit(){
    const body3 = {
      Designation_Id:this.Designation_Id,
      Designation_Name:this.Designation_Name,
      Designation_Disp_Name:this.Designation_Disp_Name,
      Designation_code:this.Designation_code,
      Designation_Level:this.Designation_Level,
      Designation_OrgID:this.Designation_OrgID
    };
      this.webservice.webRequest(this,'post',this.webservice.update_designation,body3,'4','');
  }
}
