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
  online$: Observable<boolean>;
  constructor(private webservice: WebService,private _router: Router) {
    this.online$ = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').mapTo(true),
      Observable.fromEvent(window, 'offline').mapTo(false)
    )
   }

  ngOnInit() {
    this.user_email=(JSON.parse(localStorage.getItem('user_email')));
    this.webservice.checkCredentials();
    bcarouselObject.init();
  }
  Home()
  {
    this._router.navigate(['/bcarousel']);
  }
  Tests()
  {
    this._router.navigate(['/test-table']);
  }
  Users()
  {
    this._router.navigate(['/create-user']);
  }
  designation()
  {
    this._router.navigate(['/designation']);
  }
  department()
  {
    this._router.navigate(['/departnment']);
  }
  character()
  {
    this._router.navigate(['/character']);
  }
  videolibrary()
  {
    this._router.navigate(['/video-library']);
  }
  zone()
  {
    this._router.navigate(['/zone']);
  }
  assigntest()
  {
    this._router.navigate(['/assign-test']);
  }
  report()
  {
    this._router.navigate(['/report-rough']);
  }
  menu(i)
  {
    console.log("menu",i);
    localStorage.setItem("menu", JSON.stringify(i));
  }
  logout():void {
    this.webservice.logout();
  }
}
