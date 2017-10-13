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
  name:string;
  public returnmsg;
  public initc = false;
constructor(private webservice: WebService,private _router: Router,private http:Http) {
  this.initc = false;
}
  ngOnInit(): void {
    this.webservice.checkCredentials();
    bcarouselObject.init();
    const body = {user_id:'32'};
    this.webservice.webRequest(this,'post',this.webservice.modules,body,'2','');
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
    if(this.returnmsg.category[i].display==1)
    {
      //localStorage.setItem("bcarousel", JSON.stringify(i));
      let id = i;
      this._router.navigate(['/video-lists',id]);
    }
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
webresponse(fun_id,return_data){
//  console.log("fid",fun_id,"data",r2.json());
      this.returnmsg = return_data.json();
    //  console.log("data",this.returnmsg1.category[0].Test_Mod_Tittle);
}
}