import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../webservice/web.service';
@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.css'],
  providers : [WebService]
})
export class VirtualKeyboardComponent implements OnInit {
  public a;
  public b;
  public c;
  public d;
  public num=0;
  public temp=0;
  public returnmsg;
  public error_flag;
  public error_msg;
  constructor(private _router: Router,private webservice: WebService) {
    if(localStorage.getItem("user"))
    {
      this._router.navigate(['/mobile-home']);
    }
   }

  ngOnInit() {
    this.a='';
    this.b='';
    this.c='';
    this.d='';
  }
  four_box(){
    if(this.num.toString().length==1)
    {
      // this.d=this.num;
      this.a=this.num;
    }
    if(this.num.toString().length==2)
    {
      // this.d=this.num%10;
      // this.c=this.num/10;
      // this.c=Math.trunc(this.c);
      this.b=this.num%10;
      this.a=this.num/10;
      this.a=Math.trunc(this.a);
    }
    if(this.num.toString().length==3)
    {
      // this.temp=this.num;
      // this.d=this.temp%10;
      // this.temp=this.temp/10;
      // this.temp=Math.trunc(this.temp);
      // this.c=this.temp%10;
      // this.temp=this.temp/10;
      // this.temp=Math.trunc(this.temp);
      // this.b=this.temp;
      this.temp=this.num;
      this.c=this.temp%10;
      this.temp=this.temp/10;
      this.temp=Math.trunc(this.temp);
      this.b=this.temp%10;
      this.temp=this.temp/10;
      this.temp=Math.trunc(this.temp);
      this.a=this.temp;
    }
    if(this.num.toString().length==4)
    {
      // this.temp=this.num;
      // this.d=this.temp%10;
      // this.temp=this.temp/10;
      // this.temp=Math.trunc(this.temp);
      // this.c=this.temp%10;
      // this.temp=this.temp/10;
      // this.temp=Math.trunc(this.temp);
      // this.b=this.temp%10;
      // this.temp=this.temp/10;
      // this.temp=Math.trunc(this.temp);
      // this.a=this.temp%10;
      this.temp=this.num;
      this.d=this.temp%10;
      this.temp=this.temp/10;
      this.temp=Math.trunc(this.temp);
      this.c=this.temp%10;
      this.temp=this.temp/10;
      this.temp=Math.trunc(this.temp);
      this.b=this.temp%10;
      this.temp=this.temp/10;
      this.temp=Math.trunc(this.temp);
      this.a=this.temp%10;
    }
  }
  numb(i)
  {
    if(this.num.toString().length<4)
    {
    this.num=(this.num*10)+i;
    //alert(i);
    console.log(this.num.toString().length);
    console.log(this.num);
    }
    this.four_box();
  }

  del(){
    //alert("hai");
    if(this.num>=0){
      this.num=this.num/10;
      this.num=Math.trunc(this.num);
      console.log(this.num);
      this.a='';
      this.b='';
      this.c='';
      this.d='';
      this.four_box();
      if(this.num==0)
      {
        this.a='';
      }
    }
  }

  verify(){
    const body1 = {
      Mobile:(JSON.parse(localStorage.getItem('Mobile'))),
      OTP:this.num
    };
    this.webservice.webRequest(this,'post',this.webservice.VerifyOTP,body1,'2','');
  }

  webresponse(fun_id,return_data){
    if(fun_id==2){
      if(return_data!=0){
        this.returnmsg = return_data.json();
        this.error_flag=0;
        localStorage.setItem("user", JSON.stringify(this.returnmsg.uid));
        localStorage.setItem("user_email", JSON.stringify(this.returnmsg.u_email));
        localStorage.setItem("token", JSON.stringify('Bearer '+this.returnmsg.token));
        const body = {
          user_id:this.returnmsg.uid
        };
        this.webservice.webRequest(this,'post',this.webservice.menu,body,'3','');
      }
      else{
        this.error_msg="Please Enter Correct OTP";
        this.error_flag=1;
      }
    }
    if(fun_id==3)
    {
      this.returnmsg=return_data.json();
      localStorage.setItem("side_menu", JSON.stringify(this.returnmsg));
      this._router.navigate(['/mobile-home']);
    }
  }

}
