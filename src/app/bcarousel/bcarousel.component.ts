import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'assets/bcarousel.js'
declare var bcarouselObject: any;
import { WebService } from '../webservice/web.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-bcarousel',
  templateUrl: './bcarousel.component.html',
  providers: [WebService],
  styleUrls: ['./bcarousel.component.less','./bcarousel.component.css']
})
export class BcarouselComponent implements OnInit {
  uid;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  
      // our list of avatars
      avatars = [
          {
              name: 'kristy',
              image: 'assets/images/Poster 4.1.jpg',
              visible: true
          },
          // {
          //     name: 'matthew',
          //     image: 'http://semantic-ui.com/images/avatar2/large/matthew.png',
          //     visible: false
          // },
          {
              name: 'chris',
              image: 'assets/images/Poster 6.jpg',
              visible: false
          },
          {
              name: 'jenny',
              image: 'assets/images/Poster 5.jpg',
              visible: false
          }
      ];

  name:string;
  public returnmsg;
  public return_bar;
  public initc = false;
  user_email;
constructor(private webservice: WebService,private _router: Router,private http:Http) {
  this.initc = false;
}
  ngOnInit(): void {
    this.uid=(JSON.parse(localStorage.getItem('user')));
    console.log('testt',this.uid);
    this.webservice.checkCredentials();
    bcarouselObject.init();
    if((JSON.parse(localStorage.getItem('next_play')))>0){
      this._router.navigate(['/video',JSON.parse(localStorage.getItem('next_play'))]);
    }
    else if((JSON.parse(localStorage.getItem('replay')))>0){
      this._router.navigate(['/video',JSON.parse(localStorage.getItem('replay'))]);
    }
    console.log(JSON.parse(localStorage.getItem('user_email')))
    this.user_email=(JSON.parse(localStorage.getItem('user_email')));
    const body = {user_id:this.uid};
    this.webservice.webRequest(this,'post',this.webservice.modules,body,'2','');
    const body1 = {uid:this.uid};
    this.webservice.webRequest(this,'post',this.webservice.dashbar,body1,'3','');
 }
 initcarousel(t) :void {
   if(t && !this.initc)
    {
      bcarouselObject.init();
      this.initc = true;
    }
  } 
  logout():void {
    this.webservice.logout();
  }
  selectbcarousel(i){
    // if(this.returnmsg.category[i].display==1)
    // {
      //localStorage.setItem("bcarousel", JSON.stringify(i));
    //   let id = i;
    //   this._router.navigate(['/video-lists',id]);
    // }
    this._router.navigate(['/video',i]);
  }
  selectcards(j){
      // localStorage.setItem("bcarousel", JSON.stringify(j));
      //  var str = Object.keys(j.video_path).map(function(key){ 
      //   return encodeURIComponent(key) + '=' + encodeURIComponent(j[key]); 
      // }).join('&');
      // console.log(str);
      this.returnmsg=j;
      let id = this.returnmsg;
      this._router.navigate(['/video',id]);
      console.log(j);
      console.log(this.returnmsg);
  }
  resume(){
   console.log('resume',this.returnmsg.resume.pause_time,'test id',this.returnmsg.resume.test_id);
   if((JSON.parse(localStorage.getItem('current_test')))>0){
    this._router.navigate(['/video',JSON.parse(localStorage.getItem('current_test'))]);
   }
   else{
    localStorage.setItem('lastpause['+this.returnmsg.resume.test_id+']',  JSON.stringify(this.returnmsg.resume.pause_time+1));
    this._router.navigate(['/video',this.returnmsg.resume.test_id]);
   }
  }
webresponse(fun_id,return_data){
//  console.log("fid",fun_id,"data",r2.json());
if(fun_id==2)
{
      this.returnmsg = return_data.json();
}
if(fun_id==3)
{
  this.return_bar = return_data.json();
  console.log(this.return_bar);
}
    //  console.log("data",this.returnmsg1.category[0].Test_Mod_Tittle);
}
   // action triggered when user swipes
   swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    // out of range
    if (currentIndex > this.avatars.length || currentIndex < 0) return;

    let nextIndex = 0;

    // swipe right, next avatar
    if (action === this.SWIPE_ACTION.RIGHT) {
        const isLast = currentIndex === this.avatars.length - 1;
        nextIndex = isLast ? 0 : currentIndex + 1;
    }

    // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.LEFT) {
        const isFirst = currentIndex === 0;
        nextIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
    }

    // toggle avatar visibility
    this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
}
Tests(){
  this._router.navigate(['/test-table']);
}
Users(){
  this._router.navigate(['/create-user']);
}
}