import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../webservice/web.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.component.html',
  styleUrls: ['./login-mobile.component.css'],
  providers : [WebService]
})
export class LoginMobileComponent implements OnInit {
  Mobile;
  returnmsg;
  error_flag;
  error_msg;
  constructor(private _router: Router,private webservice: WebService) {
    if(localStorage.getItem("user"))
    {
      this._router.navigate(['/bcarousel']);
    }
   }

   @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === 13) {
      this.otp_redirect();
    }
  }

  ngOnInit() {  }

  otp_redirect(){
    const body = {
      Mobile:this.Mobile
    };
    this.webservice.webRequest(this,'post',this.webservice.RequestOTP,body,'1','');
  }

  webresponse(fun_id,return_data){
    if(fun_id==1){
      if(return_data!=0){
        this.returnmsg = return_data.json();
        this.error_flag=0;
        localStorage.setItem("Mobile", JSON.stringify(this.Mobile));
        this._router.navigate(['/virtual-keyboard']);
      }
      else{
        this.error_msg="Unregistered or Server Down";
        this.error_flag=1;
      }
    }
  }
}
