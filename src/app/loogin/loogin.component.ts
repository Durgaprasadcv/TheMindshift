import { Component, OnInit } from '@angular/core';
import {UserComponent} from "../user/user.component";
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {MdInputModule} from '@angular/material';
import { WebService } from '../webservice/web.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-loogin',
  templateUrl: './loogin.component.html',
  styleUrls: ['./loogin.component.css'],
  providers : [WebService]
})
export class LooginComponent implements OnInit {
  public login_page = false;
  public login_button_text="GENERATE OTP";
  public otp_password="OTP";
  public Mobile;
  public OTP;
  public returnmsg;
  public error_msg='';
  public error_flag=0;
  public login_type;
  public admin;
  constructor(private _router: Router,private http: Http,private webservice: WebService) {
    if(localStorage.getItem("user"))
    {
      this._router.navigate(['/bcarousel']);
    }
  }

  ngOnInit() {
    this.admin=0;
    this.login_type='user';
    // this._router.navigate(['/login-mobile']);
  }
  login(){
    if(!this.login_page){
      const body = {
        Mobile:this.Mobile,
        admin:this.admin
      };
      this.webservice.webRequest(this,'post',this.webservice.RequestOTP,body,'1','');
    }
    else{
      const body1 = {
        Mobile:this.Mobile,
        OTP:this.OTP,
        password:this.OTP,
        admin:this.admin
      };
      this.webservice.webRequest(this,'post',this.webservice.VerifyOTP,body1,'2','');
    }
  }

  webresponse(fun_id,return_data){
    if(fun_id==1){
      if(return_data!=0){
        this.returnmsg = return_data.json();
        this.error_flag=0;
        this.login_page = true;
        this.login_button_text="LOGIN";
      }
      else{
        this.error_msg="Unregistered or Server Down";
        this.error_flag=1;
      }
    }
    if(fun_id==2){
      if(return_data!=0){
        this.returnmsg = return_data.json();
        this.error_flag=0;
        localStorage.setItem("user", JSON.stringify(this.returnmsg.uid));
        localStorage.setItem("user_email", JSON.stringify(this.returnmsg.u_email));
        localStorage.setItem("token", JSON.stringify('Bearer '+this.returnmsg.token));
        const body = {
          user_id:this.returnmsg.uid
        };
        this.webservice.webRequest(this,'post',this.webservice.menu,body,'3','');
      }
      else{
        this.error_msg="Plese Enter Correct Credential";
        this.error_flag=1;
      }
    }
    if(fun_id==3)
    {
      this.returnmsg=return_data.json();
      localStorage.setItem("side_menu", JSON.stringify(this.returnmsg));
      if(this.admin==0){
        this._router.navigate(['/bcarousel']);
      }
      else{
        this._router.navigate(['/admin-home']);
      }
    }
  }
  user_radio(){
    this.error_msg='';
    this.login_button_text="GENERATE OTP";
    this.otp_password="OTP";
    this.login_page=false;
    this.login_type='user';
    this.admin=0;
    console.log("login_type-",this.login_type);
  }
  admin_radio(){
    this.error_msg='';
    this.login_button_text="LOGIN";
    this.otp_password="Password";
    this.login_page=true;
    this.login_type='admin';
    this.admin=1;
    console.log("login_type-",this.login_type);
  }

}
