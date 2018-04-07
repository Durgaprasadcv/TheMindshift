import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {
  icons =1;
  constructor() { }
data=1;
data1=0;
dat2=2;
  ngOnInit() {
  }
testresult=[{quetion:"How to Sort Queryes ?",answer:"Follow the Step by step porcedure",val:1},
{quetion:"How to Array can be sorted ?",answer:"Follow the Step by step porcedure",val:2},
{quetion:"How to Sort Queryes ?",answer:"Follow the Step by step porcedure",val:0},
{quetion:"How to Push Notify ?",answer:"Follow the Step by step porcedure",val:1},
{quetion:"How to Sort Queryes ?",answer:"Follow the Step by step porcedure",val:2},
{quetion:"How to Push Notify ?",answer:"Follow the Step by step porcedure",val:0},
{quetion:"How to Pop Notify ?",answer:"Follow the Step by step porcedure",val:1},
{quetion:"How to Left  Notify ?",answer:"Follow the Step by step porcedure",val:2},
{quetion:"How to Righat Notify ?",answer:"Follow the Step by step porcedure",val:0},
{quetion:"How to center Notify ?",answer:"Follow the Step by step porcedure",val:1}
];
}
