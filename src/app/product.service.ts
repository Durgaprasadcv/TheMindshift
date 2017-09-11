import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IProduct } from './product';

@Injectable()
export class ProductService {
  public returnmsg;
//  private _producturl='assets/json/product.json';
//return this._http.get(`http://lg.djitsoft.xyz/api/Banner_list`)
  constructor(private _http: Http) { }

  getproducts(): Observable<IProduct[]> {
    return this._http.get(`http://lg.djitsoft.xyz/api/Banner_list`)
    .map((response: Response) => <IProduct[]> response.json())
    .do(data => console.log(JSON.stringify(data)));
 }
 
 getproducts1(): Observable<IProduct[]> {
  return this._http.get(`http://lg.djitsoft.xyz/api/Banner_list1`)
  .map((response: Response) => <IProduct[]> response.json())
  .do(data => console.log(JSON.stringify(data)));
  
}
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
