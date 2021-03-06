import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-access-levels',
  templateUrl: './access-levels.component.html',
  providers: [WebService],
  styleUrls: ['./access-levels.component.css']
})
export class AccessLevelsComponent implements OnInit {
  returnmsg;
  returnmsg1;
  Access_Level_Id;
  Access_Level_Name;
  Access_Level_Code;
  Access_Level_Active;
  side_menu;
  Access_Code=4;
  side_menu_visibility;
  constructor(private webservice: WebService) {
    this.side_menu_visibility=this.webservice.side_menu_visibility;
   }

  ngOnInit() {
    this.webservice.webRequest(this,'post',this.webservice.get_access_level,'','1','');

    this.side_menu=(JSON.parse(localStorage.getItem('side_menu')));
    console.log('meenu',this.side_menu);
    let i;
    for(i=0;i<this.side_menu.menu.length;i++)
    {
        if(this.side_menu.menu[i].Menu_Module_Href=="/access-levels")
        {
            this.Access_Code=this.side_menu.menu[i].Access_Code;
            console.log("Access_Code-",this.Access_Code);
        }
    }
  }
  webresponse(fun_id,return_data){
    if(fun_id==1){
      this.returnmsg = return_data.json();
      console.log(this.returnmsg);
    }
    else if(fun_id==2){
      // window.location.reload(true);
      this.webservice.webRequest(this,'post',this.webservice.get_access_level,'','1','');
    }
    else if(fun_id==3){
      // window.location.reload(true);
      this.webservice.webRequest(this,'post',this.webservice.get_access_level,'','1','');
    }
    else if(fun_id==4){
      // window.location.reload(true);
      this.webservice.webRequest(this,'post',this.webservice.get_access_level,'','1','');
    }
    else if(fun_id==5){
      this.returnmsg1 = return_data.json();
      this.Access_Level_Id=this.returnmsg1.access_level_details.Access_Level_Id;
      this.Access_Level_Name=this.returnmsg1.access_level_details.Access_Level_Name;
      this.Access_Level_Code=this.returnmsg1.access_level_details.Access_Level_Code;
      this.Access_Level_Active=this.returnmsg1.access_level_details.Access_Level_Active;
    }
  }
  add(){
    const body = {
      Access_Level_Id:this.Access_Level_Id,
      Access_Level_Name:this.Access_Level_Name,
      Access_Level_Code:this.Access_Level_Code,
      Access_Level_Active:this.Access_Level_Active
    };
      this.webservice.webRequest(this,'post',this.webservice.add_access_level,body,'2','');
  }
  store_id(i){
   this.Access_Level_Id=i;
   const body1={
    Access_Level_Id:this.Access_Level_Id
   };
   this.webservice.webRequest(this,'post',this.webservice.get_access_level,body1,'5','');
  }
  delete(){
    const body2 = {
      Access_Level_Id:this.Access_Level_Id
    };
    this.webservice.webRequest(this,'post',this.webservice.delete_access_level,body2,'3','');
    // window.location.reload(true);
  }
  edit(){
    const body3 = {
      Access_Level_Id:this.Access_Level_Id,
      Access_Level_Name:this.Access_Level_Name,
      Access_Level_Code:this.Access_Level_Code,
      Access_Level_Active:this.Access_Level_Active
    };
      this.webservice.webRequest(this,'post',this.webservice.edit_access_level,body3,'4','');
  }
  nullify(){
    this.Access_Level_Id='';
    this.Access_Level_Name='';
    this.Access_Level_Code='';
    this.Access_Level_Active='';
  }

}
