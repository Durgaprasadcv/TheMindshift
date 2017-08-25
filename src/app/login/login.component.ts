import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "./loginService/authenticate.service";
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
providers : [AuthenticateService]
})
export class LoginComponent {

   public user = new UserComponent;
   
  public errorMsg1 = '';
  public errorMsg2 = '';
  public login_page = false;
  constructor(private _service:AuthenticateService) {
    this.user.create('','');
   }
  sendmsg() {
      if(!this._service.sendmsg(this.user)) {
        this.errorMsg1 = 'User not registered ...';
      }
      else
      {
        this.login_page = true;
      }
  }
  login() {
    if(!this._service.login(this.user)) {
      this.errorMsg2 = 'Failed to login! try again ...';
    }
}

}
