import{ Component, OnInit, Directive, ElementRef } from '@angular/core';
import{MdSelectModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import{FormsModule,ReactiveFormsModule,FormControl} from '@angular/forms';
import{NativeDateAdapter,DateAdapter} from '@angular/material';
import * as $ from 'jquery/dist/fm.selectator.jquery.js';
@Component({
  selector: 'app-assign-test',
  templateUrl: './assign-test.component.html',
  providers: [MdNativeDateModule],
  styleUrls: ['./assign-test.component.css']
})
export class AssignTestComponent implements OnInit {
  users = [
    {value: 'steak-0', viewValue: '001'},
    {value: 'pizza-1', viewValue: '002'},
    {value: 'tacos-2', viewValue: '003'}
  ];
  tests=[
    {value: 'steak-0', viewValue: 'Test 1'},
    {value: 'pizza-1', viewValue: 'Test 2'},
    {value: 'tacos-2', viewValue: 'Test 3'}
  ];
  itemList = [];
  selectedItems = [];
  settings = {};
  constructor() { }

  ngOnInit() {
    this.itemList = [
      {"id":1,"itemName":"User 1","capital":"HR","image":"http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"},
      {"id":2,"itemName":"User 2", "capital":"Team Lead","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"},
      {"id":3,"itemName":"User 3", "capital":"Project Manager","image":"http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"},
      {"id":4,"itemName":"User 4","capital":"Software Engineer","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"},
      {"id":5,"itemName":"User 5","capital":"System Engineer","image":"http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg"},    
      {"id":6,"itemName":"User 6","capital":"Clerk","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"}                      
    ];

this.selectedItems = [
      {"id":1,"itemName":"User 1"},
      {"id":2,"itemName":"User 2"},
      {"id":3,"itemName":"User 3"},
      {"id":4,"itemName":"User 4"}];
this.settings = { 
          text:"Select Users",
          selectAllText:'Select All Users',
          unSelectAllText:'UnSelect All Users',
          enableSearchFilter: true,
          classes:"myclass custom-class",
          showCheckbox: true
        };
  }
  ngAfterViewInit() {
    // $('#multiple').selectator({
    //   showAllOptionsOnFocus: true,
    //   searchFields: 'value text subtitle right'
    // });
  }
  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any){
    console.log(items);
  }
   onDeSelectAll(items: any){
    console.log(items);
  }
}