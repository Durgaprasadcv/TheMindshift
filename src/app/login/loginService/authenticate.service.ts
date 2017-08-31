import { Injectable } from '@angular/core';
import {UserComponent} from "../../user/user.component";
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';




let users = [
  new UserComponent('8904045317','1243'),
  new UserComponent('9964245317','8765'),
  new UserComponent('9986001466','3654')
];

@Injectable()
export class AuthenticateService {

  public returnmsg ;
  public msg = '';
  constructor(private _router: Router,private http: Http) { }
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/login']);
  }
  sendmsg(user) {
    console.log('sendmsg');
    let authenticatedUser = users.find(u => u.username === user.username);
    //if (authenticatedUser && authenticatedUser.username === user.username){
    //  this.msg = "Your OTP for MindShift is "+authenticatedUser.password;
      //console.log('http://sms.djitsoft.com/api/sms.php?uid=646a6974736f6674&pin=539ff3ddc863f&route=4&mobile='+user.username+'&message='+this.msg+'&pushid=1');
     // this.http.get('http://sms.djitsoft.com/api/sms.php?uid=646a6974736f6674&pin=539ff3ddc863f&route=4&mobile='+user.username+'&message='+this.msg+'&pushid=1')
     // .subscribe(
     //   data => this.returnmsg = data,
     //   err => console.log('foo'),
     //   () => console.log('Got response from API', this.returnmsg)
     // );
     // return true;
   // }
    //return false;
    const body = {Mobile: user.username};
    console.log('http://lg.djitsoft.xyz/api/RequestOTP');
    this.http.post('http://lg.djitsoft.xyz/api/RequestOTP',body)
    .subscribe(
      data => this.returnmsg = data,
      err => console.log('foo'),
      () => console.log('Got response from API(OTP)', this.returnmsg)
    );
    return true;

  }
  login(user) {
    let authenticatedUser = users.find(u => u.username === user.username);
    //if (authenticatedUser && authenticatedUser.password === user.password){
    //  localStorage.setItem("user", authenticatedUser.username);
    //  c
    //  return true;
   // }
   // return false;
   const body1 = {Mobile:user.username,OTP:user.password};
   this.http.post('http://lg.djitsoft.xyz/api/VerifyOTP',body1)
   .subscribe(
     data => this.returnmsg = data.status,
     err => console.log('foo'),
     () => {if(this.returnmsg==200)
      {
        this._router.navigate(['/lanselection']);
      }
     }
   );
    return false;
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null){
      this._router.navigate(['/login']);
    }
}

}
