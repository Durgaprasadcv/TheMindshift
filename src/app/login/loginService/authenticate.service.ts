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
  public returnmsg1;
  public msg = '';
  constructor(private _router: Router,private http: Http) { }
  logout() {
    localStorage.clear();
    localStorage.removeItem("user");
    localStorage.removeItem("language");
    this._router.navigate(['/login']);
    console.log('clear');
    // window.location.reload();
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
     //return true;
     // }
     //return false;

    }
  login(user) {
    let authenticatedUser = users.find(u => u.username === user.username);
    //if (authenticatedUser && authenticatedUser.password === user.password){
    //  localStorage.setItem("user", authenticatedUser.username);
    //  this._router.navigate(['/lanselection']);
    //  return true;
   // }
   // return false;
  }
  webRequest(scope,type,url,body,fun_id,loader){
    switch(type)
    {
      case 'get' :
      { 
        console.log('POST Method')
        this.http.get(url)
        .subscribe(
         data =>  {
         this.returnmsg = data.json();
         scope.webresponse(fun_id,data);
         },
         err => console.log('failed'),
         () => console.log('Success Return data:',this.returnmsg));
        break;
       }
      case 'post' :{
        console.log("GET Method");
        this.http.post(url,body)
        .subscribe(
         data =>  {
         this.returnmsg = data.json();
         scope.webresponse(fun_id,data);
         },
         err => console.log('failed'),
         () => console.log('Success Return data:',this.returnmsg));
        break;}
  }
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null){
      this._router.navigate(['/login']);
    }
}
}
