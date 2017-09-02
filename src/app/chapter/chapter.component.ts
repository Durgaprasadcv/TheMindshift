import { Component, OnInit } from '@angular/core';
import{ Http , Response}from'@angular/http'
import 'assets/te1.js'
declare var webGlObject1: any;

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  public returnmsg;
  public returnmsg_menu;
  constructor(private http:Http) {
    webGlObject1.init();
   }
  ngOnInit() : void {
    webGlObject1.init();
    this.http.get('assets/json/product1.json')
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
