import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
@Injectable()
export class WebService {
// public main_url='http://lg.djitsoft.xyz/api/';
public main_url='http://10.0.0.7:9000/api/';
// public main_url='http://localhost:8000/api/';

//authetication
public RequestOTP=this.main_url+'RequestOTP';
public VerifyOTP=this.main_url+'VerifyOTP';

//test
public modules=this.main_url+'gettest';
public video_list=this.main_url+'gettest';
public video=this.main_url+'gettest';
public dashbar=this.main_url+'getLearningTest';
public create_test=this.main_url+'create_test';
public save_result=this.main_url+'save_result';
public gettest_detail_uid=this.main_url+'gettest_detail_uid';
public test_completion=this.main_url+'test_completion';
public get_video_library=this.main_url+'get_video_library';

//user
public get_users=this.main_url+'get_users';
public UserRegister=this.main_url+'UserRegister';
public edit_user=this.main_url+'edit_user';
public delete_user=this.main_url+'delete_user';

//designation
public get_designation=this.main_url+'get_designation';
public create_designation=this.main_url+'create_designation';
public delete_designation=this.main_url+'delete_designation';
public update_designation=this.main_url+'update_designation';

//department
public get_dept=this.main_url+"get_dept";
public create_dept=this.main_url+"create_dept";
public update_dept=this.main_url+"update_dept";
public delete_dept=this.main_url+"delete_dept";

//zone
public get_zone=this.main_url+"get_zone";
public create_zone=this.main_url+"create_zone";
public update_zone=this.main_url+"update_zone";
public delete_zone=this.main_url+"delete_zone";

//organization
public get_org=this.main_url+"get_org";
public create_org=this.main_url+"create_org";
public delete_org=this.main_url+"delete_org";
public update_org=this.main_url+"update_org";

//assignTest
public assign_test_uid=this.main_url+"assign_test_uid";
public assigned_tests=this.main_url+"assigned_tests"
public delete_assigned_tests=this.main_url+"delete_assigned_tests";

//create character
public create_character=this.main_url+"create_character";
public edit_character=this.main_url+"edit_character";
public delete_character=this.main_url+"delete_character";
public get_character=this.main_url+"get_character";

//video library
public get_video=this.main_url+"get_video";
public delete_video=this.main_url+"delete_video";
public update_video=this.main_url+"update_video";
public create_video=this.main_url+"create_video";

//home bar
public overall_chapter_completion=this.main_url+"overall_chapter_completion";


public returnmsg;
constructor(private _http: Http,private _router: Router) {   }
webRequest(scope,type,url,body,fun_id,loader){
  switch(type)
  {
    case 'get' :
    { 
      console.log('Web Service: GET Method')
      this._http.get(url)
      .subscribe(
       data =>  {
       this.returnmsg = data.json();
       scope.webresponse(fun_id,data);
       },
       err => console.log('Web service:failed'),
       () => console.log('Web service:Success Return data:',this.returnmsg));
      break;
     }
    case 'post' :{
      console.log("Web service:POST Method");
      this._http.post(url,body)
      .subscribe(
       data =>  {
       this.returnmsg = data.json();
       scope.webresponse(fun_id,data);
       },
       err => console.log('Web service:failed'),
       () => console.log('Web service:Success Return data:',this.returnmsg));
      break;}
  }
}
checkCredentials() {
  if (localStorage.getItem("user") === null){
    this._router.navigate(['/login']);
  }
}
logout() {
  localStorage.removeItem("user");
  this._router.navigate(['/login']);
  localStorage.clear();
  // window.location.reload();
}
}