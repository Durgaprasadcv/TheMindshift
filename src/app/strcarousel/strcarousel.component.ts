import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-strcarousel',
  templateUrl: './strcarousel.component.html',
  providers: [ProductService],
  styleUrls: ['./strcarousel.component.css']
  })
export class StrcarouselComponent implements OnInit {
  iproducts: IProduct[];
  constructor(private _product: ProductService) { }
  ngOnInit() : void {
    this._product.getproducts()
    .subscribe(iproducts => this.iproducts = iproducts);
 }
}
