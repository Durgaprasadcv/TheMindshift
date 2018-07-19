import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  providers: [WebService],
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
  returnmsg;
  refresh;
  return_access_control;
  return_modules;
  designation;
  modules;
  access_level;
  permission_assign_status;
  side_menu_visibility;

  constructor(private webservice: WebService) {
    this.side_menu_visibility=this.webservice.side_menu_visibility;
   }
  ngOnInit() {
    this.webservice.webRequest(this,'post',this.webservice.get_designation,'','1','');
    this.webservice.webRequest(this,'post',this.webservice.get_access_level,'','2','');
    const body3 = {
    };
    this.webservice.webRequest(this,'post',this.webservice.get_modules,body3,'3','');
  }
  webresponse(fun_id,return_data){
    if(fun_id==1)
    {
      this.returnmsg = return_data.json();
      this.refresh=1;

    }
    if(fun_id==2)
    {
      this.return_access_control = return_data.json();
    }
    if(fun_id==3)
    {
      this.return_modules = return_data.json();
    }
    if(fun_id=4)
    {
      this.permission_assign_status=return_data.json();
      console.log('permission_assign_status',this.permission_assign_status);
    }
  }
  permission_submit(){
    console.log('designation-',this.designation);
    console.log('modules-',this.modules);
    console.log('access_level-',this.access_level);
    const body4 = {
      Oid:1,
      Mid:this.modules,
      Did:this.designation,
      Access_Code:this.access_level,
      Platform:1,
      active:1.
    };
    this.webservice.webRequest(this,'post',this.webservice.add_permission,body4,'4','');
  }
  }
