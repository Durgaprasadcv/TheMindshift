import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
@Component({
  selector: 'app-module-creation',
  templateUrl: './module-creation.component.html',
  providers: [WebService],
  styleUrls: ['./module-creation.component.css']
})
export class ModuleCreationComponent implements OnInit {
  submodules=Array();
  submodules_count;
  Menu_Module_Name;
  Menu_Module_Href;
  Menu_Module_Active=false;
  returnmsg1;
  returnmsg2;
  returnmsg3;
  returnmsg5;
  constructor(private webservice: WebService) {}
  ngOnInit(){
    this.submodules[0]=0;
    this.submodules_count=0;
    const body2 = {
    };
    this.webservice.webRequest(this,'post',this.webservice.get_modules,body2,'2','');
  }
  refresh(){
    const body4 = {
    };
    this.webservice.webRequest(this,'post',this.webservice.get_modules,body4,'4','');
  }
  sub_modules(){
    this.submodules_count++;
    this.submodules[this.submodules_count]=this.submodules_count;
  }
  create_modules(){
  
  }
  create_module(){
    const body1 = {
      Menu_Module_Name:this.Menu_Module_Name,
      Menu_Module_Href:this.Menu_Module_Href,
      Menu_Module_Active:this.Menu_Module_Active
    };
    this.webservice.webRequest(this,'post',this.webservice.add_module,body1,'1','');
  }
  delete_sub_modules(i){
    console.log('delete_sub_modules',i);
    const body3 = {
      Menu_Modules_Link_Id:i
    };
    this.webservice.webRequest(this,'post',this.webservice.delete_submodule,body3,'3','');
  }
  delete_modules(j){
    console.log("delete_modules",j);
     const body5 = {
      Menu_Module_Id :j
    };
    this.webservice.webRequest(this,'post',this.webservice.delete_module,body5,'5','');
  }
  webresponse(fun_id,return_data){
    if(fun_id==1)
    {
      this.returnmsg1 = return_data.json();
      // this.refresh();
      console.log('returnmsg1',this.returnmsg1);
    }
    if(fun_id==2)
    {
      this.returnmsg2 = return_data.json();
      console.log('returnmsg2',this.returnmsg2);
    }
    if(fun_id==3)
    {
      this.returnmsg3 = return_data.json();
      // this.refresh();
      console.log('returnmsg3',this.returnmsg3);
    }
    if(fun_id==4)
    {
      this.returnmsg2 = return_data.json();
      console.log('returnmsg3',this.returnmsg2);
    }
    if(fun_id==5)
    {
      this.returnmsg5 = return_data.json();
      console.log('returnmsg5',this.returnmsg5);
    }
  }
}