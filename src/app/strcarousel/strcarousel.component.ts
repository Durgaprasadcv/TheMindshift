import { Component, OnInit } from '@angular/core';
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
  public returnmsg1;
  constructor(private _product: ProductService,private http:Http) { }
  ngOnInit() : void {
    this.http.get('http://lg.djitsoft.xyz/api/Banner_list')
    .subscribe(
          data => this.returnmsg1 = data.json(),
          err => console.log('failed'),
          () => console.log('Success Return data:',this.returnmsg1));
 }
}
