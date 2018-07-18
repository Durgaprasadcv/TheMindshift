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
  returnmsg1;

  Zone_Id;
  Zone_Name;
  Zone_code;
  Org_Id;
  test_ing;
  side_menu;
  Access_Code=4;
  side_menu_visibility;
  constructor(private webservice: WebService) {
    this.side_menu_visibility=this.webservice.side_menu_visibility;
   }

  ngOnInit() {
    this.webservice.webRequest(this,'post',this.webservice.get_zone,'','1','');
    let art="arthikrao";
    console.log('index',art.indexOf("h"));
    this.test_ing='{"test":[{"test_id":52,"test_name":"Epsisode1","test_description":"The meeting and flashback ","video_path":"http:\/\/www.djitsoft.xyz\/video_files\/test_6.mp4","no_of_questions":1,"test_image":"http:\/\/www.mindshift.djitsoft.xyz\/assets\/images\/Poster 5.jpg","feedback_questions":0,"test_status":1,"test_count":0,"stop_time":410,"question":[{"question_id":55,"question_title":"On a Scale of 1 to 10, how proud are you being a sales person?","question_type":"radio","marks_assigned":1,"Pause_time":"27","wait_time":"30","num_of_box":2,"type_options":[{"id":149,"name":"1-2","Option_skip":"12"},{"id":150,"name":"3-5","Option_skip":"12"},{"id":153,"name":"6-8","Option_skip":"12"},{"id":154,"name":"9-10","Option_skip":"12"}],"answers":["149"]}],"next_test_id":1}],"num":"1"}';
    console.log('aaa',JSON.parse(this.test_ing));
    this.side_menu=(JSON.parse(localStorage.getItem('side_menu')));
    console.log('meenu',this.side_menu);
    let i;
    for(i=0;i<this.side_menu.menu.length;i++)
    {
        if(this.side_menu.menu[i].Menu_Module_Href=="/zone")
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
      this.webservice.webRequest(this,'post',this.webservice.get_zone,'','1','');
    }
    else if(fun_id==3){
      // window.location.reload(true);
      this.webservice.webRequest(this,'post',this.webservice.get_zone,'','1','');
    }
    else if(fun_id==4){
      // window.location.reload(true);
      this.webservice.webRequest(this,'post',this.webservice.get_zone,'','1','');
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
      Org_Id:1
    };
      this.webservice.webRequest(this,'post',this.webservice.create_zone,body,'2','');
  }

  store_id(i){
    this.Zone_Id=i;
    const body1={
      Zone_Id:this.Zone_Id
    };
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
      Org_Id:1
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
