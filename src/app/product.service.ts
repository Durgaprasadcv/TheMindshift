import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
@Injectable()
export class ProductService {
public returnmsg;
constructor(private _http: Http) { }
webRequest(scope,type,url,body,fun_id,loader){
  switch(type)
  {
    case 'get' :
    { 
      console.log('GET Method')
      this._http.get(url)
      .subscribe(
       data =>  {
       this.returnmsg = data.json();
       scope.webresponse(fun_id,data);
       },
       err => console.log(' web service:failed'),
       () => console.log('web service:Success Return data:',this.returnmsg));
      break;
     }
    case 'post' :{
      console.log("POST Method");
      this._http.post(url,body)
      .subscribe(
       data =>  {
       this.returnmsg = data.json();
       scope.webresponse(fun_id,data);
       },
       err => console.log('web service:failed'),
       () => console.log('web service:Success Return data:',this.returnmsg));
      break;}
}
}
}
