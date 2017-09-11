import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Router } from '@angular/router';
import {ProductService} from "../product.service";
import {AuthenticateService} from "../login/loginService/authenticate.service";
@Component({
  selector: 'app-lanselection',
  templateUrl: './lanselection.component.html',
  providers : [ProductService,AuthenticateService],
  styleUrls: ['./lanselection.component.css']
})
export class LanselectionComponent implements OnInit {
  public returnmsg;
  public returnmsg_menu;
  constructor(private http:Http,private _router: Router,private _service:ProductService,private _service1:AuthenticateService) { 
    if(localStorage.getItem("language"))
    {
      this._router.navigate(['/bcarousel']);
    }
  }
  ngOnInit() : void {
    this._service1.checkCredentials();
    this._service.webRequest(this,'get',`http://lg.djitsoft.xyz/api/Language_Avilable`,'0','12','');
   /* this.http.get('http://lg.djitsoft.xyz/api/Language_Avilable')
    .subscribe(
          data => this.returnmsg = data.json(),
          err => console.log('failed'),
          () => {console.log('Success Return data:',this.returnmsg),
          console.log('length Return data:',this.returnmsg.length)});
   this.http.get('assets/json/product2.json')
  .subscribe(
           data => this.returnmsg_menu = data.json(),
           err => console.log('failed'),
           () => console.log('Success Return data:',this.returnmsg_menu));*/
 }
 selectlang(i)
 {
   localStorage.setItem("language", JSON.stringify(i));
          this._router.navigate(['/bcarousel']);
 }
 webresponse(fun_id,r2)
 {
   this.returnmsg = r2.json();
 }
}

