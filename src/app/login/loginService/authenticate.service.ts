import { Injectable } from '@angular/core';
import {UserComponent} from "../../user/user.component";
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';




var users = [];
 /* new UserComponent.create('8904045317','1243'),
  new UserComponent.create('9964245317','8765'),
  new UserComponent.create('9986001466','3654')
];*/

@Injectable()
export class AuthenticateService {

  public returnmsg ;
  public usercomp = new UserComponent;
  public msg = '';
  constructor(private _router: Router,private http: Http) { 
    users.push(this.usercomp.create('8904045317','1243'));
    users.push(this.usercomp.create('9964245317','8765'));
    users.push(this.usercomp.create('9986001466','3654'));
  }
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/login']);
  }
  sendmsg(user) {
    console.log('sendmsg');
    let authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.username === user.username){
      this.msg = "Your OTP for MindShift is "+authenticatedUser.password;
      console.log('http://sms.djitsoft.com/api/sms.php?uid=646a6974736f6674&pin=539ff3ddc863f&route=4&mobile='+user.username+'&message='+this.msg+'&pushid=1');
      this.http.get('http://sms.djitsoft.com/api/sms.php?uid=646a6974736f6674&pin=539ff3ddc863f&route=4&mobile='+user.username+'&message='+this.msg+'&pushid=1')
      .subscribe(
        data => this.returnmsg = data,
        err => console.log('foo'),
        () => console.log('Got response from API', this.returnmsg)
      );
      return true;
    }
    return false;
  }
  login(user) {
    let authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.username);
      this._router.navigate(['/lanselection']);
      return true;
    }
    return false;
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null){
      this._router.navigate(['/login']);
    }
}

}
