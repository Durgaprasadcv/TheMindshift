import { Component } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import { OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
// import { Customer } from './customer.interface';
import { Customer } from './webservice/web.service';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  entryComponents: [LoginComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public myForm: FormGroup; 
  constructor(private _fb: FormBuilder) { }

    ngOnInit() {
    // we will initialize our form here
    }

    save(model: Customer) {
        // call API to save customer
        console.log(model);
    }
}
