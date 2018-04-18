import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../webservice/web.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {RatingModule} from "ngx-rating";
@Component({
  selector: 'app-bcarousel',
  templateUrl: './bcarousel.component.html',
  providers: [WebService],
  styleUrls: ['./bcarousel.component.less','./bcarousel.component.css']
})
export class BcarouselComponent implements OnInit {
  starsCount: number;
  uid;
  public returnmsg;
  public return_report;
  public return_bar;
  user_email;
  public progress_bar=10;
  online$: Observable<boolean>;
constructor(private webservice: WebService,private _router: Router,private http:Http) {
  //check for connectivity
  this.online$ = Observable.merge(
    Observable.of(navigator.onLine),
    Observable.fromEvent(window, 'online').mapTo(true),
    Observable.fromEvent(window, 'offline').mapTo(false)
  )
  // if(!(this.online$)){

  // }
  console.log('network',this.online$);
}
  ngOnInit(): void {
    //document.cookie = "username=John Doe";
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC;";
    // document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    console.log('network',this.online$);
    // fetch_the_user_id_from_local_storage
    this.uid=(JSON.parse(localStorage.getItem('user')));
    //check wheather logged in
    this.webservice.checkCredentials();

    const body3 = {user_id:this.uid};
    this.webservice.webRequest(this,'post',this.webservice.overall_chapter_completion,body3,'3','');

    if((JSON.parse(localStorage.getItem('next_play')))>0){
      this._router.navigate(['/video',JSON.parse(localStorage.getItem('next_play'))]);
    }
    else if((JSON.parse(localStorage.getItem('replay')))>0){
      this._router.navigate(['/video',JSON.parse(localStorage.getItem('replay'))]);
    }

    //fetch the user email from local storage
    this.user_email=(JSON.parse(localStorage.getItem('user_email')));

    //api call for test, character, banner image and description data
    const body = {user_id:this.uid};
    this.webservice.webRequest(this,'post',this.webservice.modules,body,'1','');

    //api call for user report
    const body1 = {uid:this.uid};
    this.webservice.webRequest(this,'post',this.webservice.dashbar,body1,'2','');
 } 

  // logout service
  logout():void {
    this.webservice.logout();
  }

  //function called on perticular test is selected
  selecttest(i){
    this._router.navigate(['/video',i]);
  }

  // called on resume button click
  resume(){
  //from local storage
   if((JSON.parse(localStorage.getItem('current_test')))>0){
    this._router.navigate(['/video',JSON.parse(localStorage.getItem('current_test'))]);
   }
   //from api data
   else{
    localStorage.setItem('lastpause['+this.returnmsg.resume.test_id+']',  JSON.stringify(this.returnmsg.resume.pause_time+1));
    this._router.navigate(['/video',this.returnmsg.resume.test_id]);
   }
  }

//api call response
webresponse(fun_id,return_data){
  if(fun_id==1)
  {
    this.returnmsg = return_data.json();
    console.log('api',this.returnmsg);
  }
  if(fun_id==2)
  {
    this.return_report = return_data.json();
    console.log('api',this.return_report);
  }
  if(fun_id==3)
  {
    this.return_bar = return_data.json();
    console.log('progress_bar',this.return_bar.overall_chapter_completion);
    this.progress_bar=this.return_bar.overall_chapter_completion;
  }
}
}