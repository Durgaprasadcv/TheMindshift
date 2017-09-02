import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "./loginService/authenticate.service";
import {UserComponent} from "../user/user.component";
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
providers : [AuthenticateService]
})
export class LoginComponent {
  public returnmsg1;
   public user = new UserComponent('','');
  public errorMsg1 = '';
  public errorMsg2 = '';
  public login_page = false;
  constructor(private _service:AuthenticateService,private _router: Router,private http: Http) { }
  sendmsg() {
      //if(!this._service.sendmsg(this.user)) {
     //   this.errorMsg1 = 'User not registered ...';
     // }
    //  else
    //  {
    //    this.login_page = true;
    //  }
    const body = {Mobile:this.user.username};
    this.http.post('http://lg.djitsoft.xyz/api/RequestOTP',body)
    .subscribe(
          data =>{  this.returnmsg1 = data.json();
                    this.login_page = true;},
          err => {  console.log('failed');
                    this.errorMsg1 = 'User not registered ...';},
          () =>     console.log('Success return data',this.returnmsg1)
       
    );
  }
  login() {
   // if(!this._service.login(this.user)) {
   //   this.errorMsg2 = 'Failed to login! try again ...';
   // }
  //  else
  //    {
  //      this._router.navigate(['/lanselection']);
 //     }
 const body = {Mobile:this.user.username,OTP:this.user.password};
 this.http.post('http://lg.djitsoft.xyz/api/VerifyOTP',body)
 .subscribe(
   data =>{ this.returnmsg1 = data.json();
          this._router.navigate(['/lanselection']);},
       err => {console.log('failed');
       this.errorMsg2 = 'Failed to login! try again ...';
      },
       () => console.log('Success return data',this.returnmsg1)
    
   );

}


}
