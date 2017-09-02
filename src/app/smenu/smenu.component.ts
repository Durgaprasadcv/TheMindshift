import { Component, OnInit } from '@angular/core';
import{ Http , Response}from'@angular/http'
@Component({
  selector: 'app-smenu',
  templateUrl: './smenu.component.html',
  styleUrls: ['./smenu.component.css']
})
export class SmenuComponent implements OnInit {
public returnmsg;
  constructor(private http:Http) { }
  ngOnInit() : void {
    this.http.get('assets/json/product2.json')
    .subscribe(
          data => this.returnmsg = data.json(),
          err => console.log('failed'),
          () => console.log('Success Return data:',this.returnmsg));
 }
}
