import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.css']
})
export class VirtualKeyboardComponent implements OnInit {
  public a;
  public b;
  public c;
  public d;  
  public num=0;
  public temp=0;
  constructor() { }

  ngOnInit() {
    this.a='';
    this.b='';
    this.c='';
    this.d='';
  }
  four_box(){
    if(this.num.toString().length==1)
    {
      this.d=this.num;
    }
    if(this.num.toString().length==2)
    {
      this.d=this.num%10;
      this.c=this.num/10;
      this.c=Math.trunc(this.c);
    }
    if(this.num.toString().length==3)
    { 
      this.temp=this.num;
      this.d=this.temp%10;
      this.temp=this.temp/10;
      this.temp=Math.trunc(this.temp);
      this.c=this.temp%10;
      this.temp=this.temp/10;
      this.temp=Math.trunc(this.temp);
      this.b=this.temp;
    }
    if(this.num.toString().length==4)
    {
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
        this.d='';
      }
    }
  }

}
