import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Router } from '@angular/router';
import { WebService } from '../webservice/web.service';
import {AuthenticateService} from "../login/loginService/authenticate.service";
@Component({
  selector: 'app-lanselection',
  templateUrl: './lanselection.component.html',
  providers : [WebService,AuthenticateService],
  styleUrls: ['./lanselection.component.css']
})
export class LanselectionComponent implements OnInit {
  public returnmsg;
  public returnmsg_menu;
  constructor(private http:Http,private _router: Router,private _service:WebService,private _service1:AuthenticateService) {
    if(localStorage.getItem("language"))
    {
      this._router.navigate(['/mobile-home']);
    }
  }
  ngOnInit() : void {
    this._service1.checkCredentials();
    this._service.webRequest(this,'get',`http://lg.djitsoft.xyz/api/Language_Avilable`,'0','12','');
 }
 selectlang(i)
 {
   localStorage.setItem("language", JSON.stringify(i));
          this._router.navigate(['/mobile-home']);
 }
 webresponse(fun_id,r2)
 {
   this.returnmsg = r2.json();
 }
}

