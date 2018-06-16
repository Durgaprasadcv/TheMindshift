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
  Menu_Modules_Link_Id;
  Menu_Module_Id;
  Menu_Module_Name;
  Menu_Module_Href;
  Menu_Module_Name_add;
  Menu_Module_Href_add;
  Menu_Module_Active=false;
  returnmsg1;
  returnmsg2;
  returnmsg3;
  returnmsg4;
  returnmsg5;
  returnmsg6;
  returnmsg7;
  returnmsg8;
  returnmsg9;
  constructor(private webservice: WebService) {}
  ngOnInit(){
    this.submodules[0]=0;
    this.submodules_count=0;
    const body2 = {
    };
    this.webservice.webRequest(this,'post',this.webservice.get_modules,body2,'2','');
  }
  sub_modules(){
    this.submodules_count++;
    this.submodules[this.submodules_count]=this.submodules_count;
  }

  create_module(){
    this.Menu_Module_Name=this.Menu_Module_Name_add;
    this.Menu_Module_Href=this.Menu_Module_Href_add;
    const body1 = {
      Menu_Module_Name:this.Menu_Module_Name,
      Menu_Module_Href:this.Menu_Module_Href,
      Menu_Module_Active:1
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

  store_module_id(i){
    this.Menu_Module_Id=i;
    const body4={
      Menu_Module_Id:this.Menu_Module_Id
    }
    this.webservice.webRequest(this,'post',this.webservice.get_main_modules,body4,'4','');
   }

   store_sub_module_id(i,j){
    this.Menu_Module_Id=i;
    this.Menu_Modules_Link_Id=j;
    const body6={
      Menu_Modules_Link_Id:this.Menu_Modules_Link_Id
    }
    this.webservice.webRequest(this,'post',this.webservice.get_sub_modules,body6,'6','');
   }

   edit_module(){
      const body8={
        Menu_Module_Id:this.Menu_Module_Id,
        Menu_Module_Org_Id:1,
        Menu_Module_Name:this.Menu_Module_Name,
        Menu_Module_Href:this.Menu_Module_Href,
        Menu_Module_Active:1
      }
      this.webservice.webRequest(this,'post',this.webservice.edit_module,body8,'8','');
   }

   edit_sub_module(){
    const body9={
      Menu_Modules_Link_Id:this.Menu_Modules_Link_Id,
      Menu_Module_Org_Id:1,
      Menu_Modules_Name:this.Menu_Module_Name,
      Menu_Modules_Href:this.Menu_Module_Href,
      Menu_Modules_Active:1
    }
    this.webservice.webRequest(this,'post',this.webservice.edit_submodule,body9,'9','');
   }

   add_sub_modules_store(i){
    this.Menu_Module_Id=i;
    this.Menu_Module_Name='';
    this.Menu_Module_Href='';
   }
   add_sub_modules(i){
    const body7={
      Menu_Module_Id:this.Menu_Module_Id,
      Menu_Modules_Name:this.Menu_Module_Name,
      Menu_Modules_Href:this.Menu_Module_Href,
      Menu_Modules_Link_Active:1,
      Menu_Modules_Platform:1
    }
    this.webservice.webRequest(this,'post',this.webservice.add_submodule,body7,'7','');
   }

  webresponse(fun_id,return_data){
    if(fun_id==1)
    {
      this.returnmsg1 = return_data.json();
      this.Menu_Module_Name_add='';
      this.Menu_Module_Href_add='';
      const body2 = {
      };
      this.webservice.webRequest(this,'post',this.webservice.get_modules,body2,'2','');
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
      const body2 = {
      };
      this.webservice.webRequest(this,'post',this.webservice.get_modules,body2,'2','');
      console.log('returnmsg3',this.returnmsg3);
    }
    if(fun_id==4)
    {
      this.returnmsg4=return_data.json();
      this.Menu_Module_Id=this.returnmsg4.Menu_Module_Id;
      this.Menu_Module_Name=this.returnmsg4.Menu_Module_Name;
      this.Menu_Module_Href=this.returnmsg4.Menu_Module_Href;
    }
    if(fun_id==5)
    {
      this.returnmsg5 = return_data.json();
      const body2 = {
      };
      this.webservice.webRequest(this,'post',this.webservice.get_modules,body2,'2','');
      console.log('returnmsg5',this.returnmsg5);
    }
    if(fun_id==6)
    {
      this.returnmsg6 = return_data.json();
      this.Menu_Modules_Link_Id=this.returnmsg6.Menu_Modules_Link_Id;
      this.Menu_Module_Name=this.returnmsg6.Menu_Modules_Name;
      this.Menu_Module_Href=this.returnmsg6.Menu_Modules_Href;
    }
    if(fun_id==7)
    {
      this.returnmsg7 = return_data.json();
      const body2 = {
      };
      this.webservice.webRequest(this,'post',this.webservice.get_modules,body2,'2','');
      console.log('returnmsg7',this.returnmsg7);
    }
    if(fun_id==8)
    {
      this.returnmsg8 = return_data.json();
      const body2 = {
      };
      this.webservice.webRequest(this,'post',this.webservice.get_modules,body2,'2','');
      console.log('returnmsg8',this.returnmsg8);
    }
    if(fun_id==9)
    {
      this.returnmsg9 = return_data.json();
      const body2 = {
      };
      this.webservice.webRequest(this,'post',this.webservice.get_modules,body2,'2','');
      console.log('returnmsg9',this.returnmsg9);
    }
  }
}