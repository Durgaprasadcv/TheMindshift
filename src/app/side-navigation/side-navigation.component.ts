import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'assets/bcarousel.js';
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
  public returnmsg;
  User_Id;
  side_menu;
  side_menu_visibility;
  constructor(private webservice: WebService,private _router: Router) {
    this.online$ = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').mapTo(true),
      Observable.fromEvent(window, 'offline').mapTo(false)
    );
    this.side_menu_visibility=this.webservice.side_menu_visibility;
   }

  ngOnInit() {
    this.User_Id=(JSON.parse(localStorage.getItem('user')));
    this.user_email=(JSON.parse(localStorage.getItem('user_email')));
    this.webservice.checkCredentials();
    bcarouselObject.init(this.side_menu_visibility);
    this.side_menu=(JSON.parse(localStorage.getItem('side_menu')));
    console.log('meenu',this.side_menu);
    let i;
    for(i=0;i<this.side_menu.menu.length;i++)
    {
        this.side_menu.menu[i].drop_down=0;
    }
  }
  webresponse(fun_id,return_data){
    if(fun_id==1)
    {
          this.returnmsg = return_data.json();
          console.log(this.returnmsg);
    }
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
  settings()
  {
    this._router.navigate(['/settings']);
  }
  user(){
    this._router.navigate(['/user-report']);
  }
  menu()
  {
    console.log("menu");
    localStorage.setItem("menu", JSON.stringify('s'));
    this._router.navigate(['/i']);
  }
  drop(i){
    if(this.side_menu.menu[i].drop_down==1)
    {
      this.side_menu.menu[i].drop_down=0;
    }
    else{
      this.side_menu.menu[i].drop_down=1;
    }
    console.log('menu',this.side_menu);
    console.log('drrop',this.side_menu.menu[i].drop_down);
  }
  logout():void {
    this.webservice.logout();
  }
}
