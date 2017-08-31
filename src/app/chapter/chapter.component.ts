import { Component, OnInit } from '@angular/core';
import 'assets/te1.js'
declare var webGlObject1: any;

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  constructor() {
    webGlObject1.init();
   }

  ngOnInit() {
    webGlObject1.init();
  }

}
