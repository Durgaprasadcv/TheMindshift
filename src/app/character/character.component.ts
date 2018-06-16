import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Http , Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { ElementRef, Input, ViewChild } from '@angular/core';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  providers: [WebService],
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;
  @ViewChild('fileInputa') inputEla: ElementRef;
  returnmsg;
  returnmsg1
  Dept_Id;
  Dept_Name;
  Dept_Desp;
  Dept_Code;
  Dept_Org_ID;
  address_line_1;
  address_line_2;
  city;
  state;
  country;
  pincode;
  email;
  contact_no;
  files;
  char_file;

  char_id;
  char_name;
  char_description;
  char_url;

  demo;

  returnmsg_add;

  constructor(private webservice: WebService,private http: Http) { }

  ngOnInit() {
    this.webservice.webRequest(this,'post',this.webservice.get_character,'','1','');
  }
  webresponse(fun_id,return_data){
    if(fun_id==1)
    {
          this.returnmsg = return_data.json();
          console.log(this.returnmsg);
    }
    else if(fun_id==2){
      window.location.reload(true);
    }
    else if(fun_id==3){
      window.location.reload(true);
    }
    else if(fun_id==4){
      window.location.reload(true);
    }
    else if(fun_id==5){
      this.returnmsg1 = return_data.json();
      console.log('haii',this.returnmsg1)
      this.char_id=this.returnmsg1.characters[0].char_id;
      this.char_name=this.returnmsg1.characters[0].char_name;
      this.char_description=this.returnmsg1.characters[0].char_description;
      this.char_url=this.returnmsg1.characters[0].char_url;
    }
    else if(fun_id==6){
      this.char_file = return_data.json();
      console.log("file uplaod",this.char_file);
    }
  }
  add(){
    let inputEla: HTMLInputElement = this.inputEla.nativeElement;
    let fileCount: number = inputEla.files.length;
    let formData = new FormData();
      formData.append('char_image_file', inputEla.files.item(0));
      formData.append('char_name',this.char_name);
      formData.append('char_description',this.char_description);
      console.log('form data',formData);
      this.http.post('http://www.lg.djitsoft.xyz/api/create_character',formData)
      .subscribe(
        data =>  { this.returnmsg_add = data.json();
      },
      err => console.log('Web service:failed'),
      () => console.log('Web service:Success Return data:',this.returnmsg_add));
  }
  store_id(i){
   this.char_id=i;
   const body1={
    char_id:this.char_id
   }
   this.webservice.webRequest(this,'post',this.webservice.get_character,body1,'5','');
  }
  delete(){
    const body2 = {
      char_id:this.char_id
    };
    this.webservice.webRequest(this,'post',this.webservice.delete_character,body2,'3','');
  }
  edit(){
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
     formData.append('char_id', this.char_id);
     formData.append('char_image_file', inputEl.files.item(0));
      formData.append('char_name',this.char_name);
      formData.append('char_description',this.char_description);
      console.log('form data',formData);
      this.http.post('http://www.lg.djitsoft.xyz/api/edit_character',formData)
      .subscribe(
        data =>  { this.returnmsg_add = data.json();
      },
      err => console.log('Web service:failed'),
      () => console.log('Web service:Success Return data:',this.returnmsg_add));
  }
  onChange(event) {
    this.files = event.srcElement.files;
    console.log(this.files);
  }
  char_upload(){
    const body6 = {
      char_image_file:this.files,
      char_name:'aaa',
      char_description:'bbb'
    };
      this.webservice.webRequest(this,'post',this.webservice.create_character,body6,'6','');
    console.log(this.files);
  }
  upload() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
      formData.append('char_image_file', inputEl.files.item(0));
      formData.append('char_name','s');
      formData.append('char_description','s');
      console.log('form data',formData);
      this.http.post('http://www.lg.djitsoft.xyz/api/create_character',formData)
      .subscribe(
        data =>  { this.returnmsg_add = data.json();
      },
      err => console.log('Web service:failed'),
      () => console.log('Web service:Success Return data:',this.returnmsg_add));
  }
  nullify(){
    this.char_id='';
    this.char_name='';
    this.char_description='';
    this.char_url='';
  }
}