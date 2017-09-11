import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'assets/external.js'
declare var webGlObject: any;
import { ProductService } from '../product.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthenticateService} from "../login/loginService/authenticate.service";

@Component({
  selector: 'app-bcarousel',
  templateUrl: './bcarousel.component.html',
  providers: [ProductService,AuthenticateService],
  styleUrls: ['./bcarousel.component.less','./bcarousel.component.css']
})
export class BcarouselComponent implements OnInit {
  name:string;
  public returnmsg;
  public returnmsg_menu;
  public initc = false;
constructor(private _product: ProductService,private _router: Router,private http:Http,private _service:AuthenticateService) {
  this.initc = false;
}
  ngOnInit(): void {
    this._service.checkCredentials();
    webGlObject.init();
    this._product.webRequest(this,'get',`http://lg.djitsoft.xyz/api/Banner_list`,'0','1','');
  /*  this.http.get('http://lg.djitsoft.xyz/api/Banner_list')
    .subscribe(
          data => {this.returnmsg = data.json();  },
          err => console.log('failed'),
         () => console.log('Success Return data:',this.returnmsg));
    this.http.get('assets/json/product2.json')
    .subscribe(
           data => this.returnmsg_menu = data.json(),
           err => console.log('failed'),
          () => console.log('Success Return data:',this.returnmsg_menu));*/
 }
 initcarousel(t) :void {
 
   if(t && !this.initc)
    {
      webGlObject.init();
      this.initc = true;
    }
  } logout():void {
    this._service.logout();
}
selectbcarousel(i)
{
  localStorage.setItem("bcarousel", JSON.stringify(i));
  this._router.navigate(['/video']);
}
webresponse(fun_id,r2)
{
  this.returnmsg = r2.json();
}
 }
