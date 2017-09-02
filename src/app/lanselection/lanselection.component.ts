import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
@Component({
  selector: 'app-lanselection',
  templateUrl: './lanselection.component.html',
  styleUrls: ['./lanselection.component.css']
})
export class LanselectionComponent implements OnInit {
  public returnmsg;
  public returnmsg_menu;
  constructor(private http:Http) { }
  ngOnInit() : void {
    this.http.get('http://lg.djitsoft.xyz/api/Language_Avilable')
    .subscribe(
          data => this.returnmsg = data.json(),
          err => console.log('failed'),
          () => console.log('Success Return data:',this.returnmsg));
   this.http.get('assets/json/product2.json')
  .subscribe(
           data => this.returnmsg_menu = data.json(),
           err => console.log('failed'),
           () => console.log('Success Return data:',this.returnmsg_menu));
 }
}

