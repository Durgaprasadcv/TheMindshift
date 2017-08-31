import { Injectable } from '@angular/core';

import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IProduct } from './product';

@Injectable()
export class ProductService {
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

}
