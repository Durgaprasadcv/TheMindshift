import { Component, OnInit } from '@angular/core';
import{ Http , Response}from'@angular/http'
import 'assets/te1.js'
import { Router } from '@angular/router';
declare var webGlObject1: any;
import {ProductService} from "../product.service";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
  providers : [ProductService]
})
export class ChapterComponent implements OnInit {
  public returnmsg;
  public returnmsg_menu;
  public r1;
  public initc = false;
  constructor(private _service:ProductService,private http:Http,private _router: Router) {
    //webGlObject1.init();
    this.initc = false;
   }
  ngOnInit() : void {
   // const body={Mobile:'9611404275'};
    //this._service.webRequest(this,'post',`http://lg.djitsoft.xyz/api/RequestOTP`,body,'123','');
    //console.log('in chapter',this.r1)
    //webGlObject1.init();
   this.http.get('http://lg.djitsoft.xyz/api/TestModuleDetails?modul_id=1')
    .subscribe(
          data => this.returnmsg = data.json(),
          err => console.log('failed'),
          () => console.log('Success Return data:',this.returnmsg));
      this.http.get('assets/json/product2.json')
          .subscribe(
          data => this.returnmsg_menu = data.json(),
          err => console.log('failed'),
          () => console.log('Success Return data:',this.returnmsg_menu));
 }

 initcarousel(t) :void {
  
    if(t && !this.initc)
     {
       webGlObject1.init();
       this.initc = true;
     }
  }
  webresponse(fun_id,r2)
  {
    console.log('hhh',fun_id,r2.json());
  }
}
