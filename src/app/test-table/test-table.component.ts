import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  edit(){
    alert("Edit");
  }
  delete(){
    alert("delete");
  }
  create_test(){
    this._router.navigate(['/create-test']);
  }
}
