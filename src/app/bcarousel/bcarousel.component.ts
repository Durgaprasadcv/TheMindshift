import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'assets/external.js'
declare var webGlObject: any;

import { IProduct } from '../product';
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
  iproducts: IProduct[];
constructor(private _product: ProductService,private _router: Router) {
}
  ngOnInit(): void {
    webGlObject.init();
    this._product.getproducts1()
    .subscribe(iproducts => this.iproducts = iproducts);
 }
  }
