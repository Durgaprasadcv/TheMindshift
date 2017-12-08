import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
@Injectable()
export class WebService {
public main_url='http://lg.djitsoft.xyz/api/';
public modules=this.main_url+'gettest';
public video_list=this.main_url+'gettest';
public video=this.main_url+'gettest';
public dashbar=this.main_url+'getLearningTest';
public CreateTest=this.main_url+'CreateTest';
public question_update=this.main_url+'getreport'
public returnmsg;
constructor(private _http: Http,private _router: Router) { }
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
  // window.location.reload();
}
}