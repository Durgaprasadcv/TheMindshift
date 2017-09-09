import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'assets/external.js'
declare var webGlObject: any;
import { ProductService } from '../product.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bcarousel',
  templateUrl: './bcarousel.component.html',
  providers: [ProductService],
  styleUrls: ['./bcarousel.component.css']
})
export class BcarouselComponent implements OnInit {
  name:string;
  public returnmsg;
  public returnmsg_menu;
  public initc = false;
constructor(private _product: ProductService,private _router: Router,private http:Http) {
  this.initc = false;
}
  ngOnInit(): void {
   // webGlObject.init();
    this.http.get('http://lg.djitsoft.xyz/api/ListTestModules')
    .subscribe(
          data => {this.returnmsg = data.json();  },
          err => console.log('failed'),
         () => console.log('Success Return data:',this.returnmsg));
    this.http.get('assets/json/product2.json')
    .subscribe(
           data => this.returnmsg_menu = data.json(),
           err => console.log('failed'),
          () => console.log('Success Return data:',this.returnmsg_menu));
 }
 initcarousel(t) :void {
 
   if(t && !this.initc)
    {
      webGlObject.init();
      this.initc = true;
    }
  }
 }
