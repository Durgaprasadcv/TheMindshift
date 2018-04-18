import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.component.html',
  styleUrls: ['./login-mobile.component.css']
})
export class LoginMobileComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {  }
  otp_redirect(){
    this._router.navigate(['/virtual-keyboard']);
  }
}
