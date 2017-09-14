import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'assets/bcarousel.js'
declare var bcarouselObject: any;
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
  public returnmsg1;
  public initc = false;
constructor(private _product: ProductService,private _router: Router,private http:Http,private _service:AuthenticateService) {
  this.initc = false;
}
  ngOnInit(): void {
    this._service.checkCredentials();
    bcarouselObject.init();
    const body = {user_id:'32'};
    this._product.webRequest(this,'post',`http://lg.djitsoft.xyz/api/gettest`,body,'2','');
 }
 initcarousel(t) :void {
 
   if(t && !this.initc)
    {
      bcarouselObject.init();
      this.initc = true;
    }
  } logout():void {
    this._service.logout();
}
selectbcarousel(i)
{
  //localStorage.setItem("bcarousel", JSON.stringify(i));
  //this._router.navigate(['/video-lists',i]);
}
selectcards(j)
{
 // localStorage.setItem("bcarousel", JSON.stringify(j));
//  var str = Object.keys(j.video_path).map(function(key){ 
//   return encodeURIComponent(key) + '=' + encodeURIComponent(j[key]); 
// }).join('&');
// console.log(str);
  this.returnmsg=j;
  let id = this.returnmsg;
  this._router.navigate(['/video',id]);
  console.log(j);
  console.log(this.returnmsg);
}
webresponse(fun_id,r2)
{
//  console.log("fid",fun_id,"data",r2.json());
      this.returnmsg1 = r2.json();
    //  console.log("data",this.returnmsg1.category[0].Test_Mod_Tittle);
}
}
836484