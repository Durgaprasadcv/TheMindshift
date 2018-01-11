import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'assets/bcarousel.js'
declare var bcarouselObject: any;
import { WebService } from '../webservice/web.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  providers: [WebService],
  styleUrls: ['./side-navigation.component.less','./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {
  user_email;
  constructor(private webservice: WebService,private _router: Router) { }

  ngOnInit() {
    this.user_email=(JSON.parse(localStorage.getItem('user_email')));
    this.webservice.checkCredentials();
    bcarouselObject.init();
  }
  Tests(){
    this._router.navigate(['/test-table']);
  }
  Users(){
    this._router.navigate(['/create-user']);
  }
  designation(){
    this._router.navigate(['/designation']);
  }
  logout():void {
    this.webservice.logout();
  }
}
