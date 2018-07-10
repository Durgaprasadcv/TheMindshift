import { Injectable } from '@angular/core';
import { Http , Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
@Injectable()
export class WebService {
//  public main_url='http://www.lg.djitsoft.xyz/api/';
public main_url='http://10.0.0.7:8000/api/';
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
public assigned_tests=this.main_url+"assigned_tests";
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

//aneesh api
public test=this.main_url+"getusertest";

//menu permission
public menu=this.main_url+"menu";
public menu_items;

public returnmsg;
public request_header_token;
public return_header;

//modules creation
public add_module=this.main_url+"add_module";
public add_submodule=this.main_url+"add_submodule";
public delete_module=this.main_url+"delete_module";
public delete_submodule=this.main_url+"delete_submodule";
public get_modules=this.main_url+"get_modules";
public edit_module=this.main_url+"edit_module";
public edit_submodule=this.main_url+"edit_submodule";
public get_main_modules=this.main_url+"get_main_modules";
public get_sub_modules=this.main_url+"get_sub_modules";
public save_module=this.main_url+"save_module";

//access level
public add_access_level=this.main_url+"add_access_level";
public delete_access_level=this.main_url+"delete_access_level";
public get_access_level=this.main_url+"get_access_level";
public edit_access_level=this.main_url+"edit_access_level";

//permission
public add_permission=this.main_url+"add_permission";

//language
public Language_Available=this.main_url+"Language_Available";

//chapter
public create_test_new=this.main_url+"create_test_new";

//question_option_preview
public get_question_option=this.main_url+"get_question_option";
public save_question=this.main_url+"save_question";
public get_language=this.main_url+"get_language";
public get_question=this.main_url+"get_question";
public get_option=this.main_url+"get_option";
public save_option=this.main_url+"save_option";

constructor(private _http: Http,private _router: Router) {   }

createAuthorizationHeader(headers: Headers) {
  this.request_header_token=null;
  this.request_header_token=(JSON.parse(localStorage.getItem('token')));
  headers.append('authorization', this.request_header_token);
  headers.append('Content-Type', 'application/json');
}

webRequest(scope,type,url,body,fun_id,loader){
  switch(type)
  {
    case 'get' :
    {
      console.log('Web Service: GET Method');
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      this._http.get(url,{headers: headers})
      .subscribe(
       data =>  {
        this.returnmsg = data.json();
        this.return_header = data.headers.get('Authorization');
        if(this.return_header){
          localStorage.setItem("token", JSON.stringify(this.return_header));
        }
        scope.webresponse(fun_id,data);
       },
       err =>{ console.log('Web service:failed');
                scope.webresponse(fun_id,0);
        },
       () =>{ console.log('Web service:Success Return data:',this.returnmsg);
              console.log('Web service:Success Return Header:',this.return_header);
      });
      break;
     }
    case 'post' :{
      console.log("Web service:POST Method");
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      this._http.post(url,body,{headers: headers})
      .subscribe(
       data =>  {
       this.returnmsg = data.json();
       this.return_header = data.headers.get('Authorization');
       if(this.return_header){
        localStorage.setItem("token", JSON.stringify(this.return_header));
       }
       scope.webresponse(fun_id,data);
       },
       err =>{ console.log('Web service:failed');
                scope.webresponse(fun_id,0);
        },
       () => {
         console.log('Web service:Success Return data:',this.returnmsg);
         console.log('Web service:Success Return Header:',this.return_header);
      });
      break;}
  }
}
checkCredentials() {
  if (localStorage.getItem("user") === null){
    this._router.navigate(['/loogin']);
  }
}
logout() {
  localStorage.removeItem("user");
  this._router.navigate(['/loogin']);
  localStorage.clear();
  // window.location.reload();
}
}
