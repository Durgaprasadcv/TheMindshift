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

  constructor(private webservice: WebService,private http: Http) { }

  ngOnInit() {
    this.webservice.webRequest(this,'post',this.webservice.get_dept,'','1','');
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
      this.Dept_Name=this.returnmsg1.Dept_Name;
      this.Dept_Desp=this.returnmsg1.Dept_Desp;
      this.Dept_Code=this.returnmsg1.Dept_Code;
      this.Dept_Org_ID=this.returnmsg1.Dept_Org_ID;
      this.address_line_1=this.returnmsg1.address_line_1;
      this.address_line_2=this.returnmsg1.address_line_2;
      this.city=this.returnmsg1.city;
      this.state=this.returnmsg1.state;
      this.country=this.returnmsg1.country;
      this.pincode=this.returnmsg1.pincode;
      this.email=this.returnmsg1.email;
      this.contact_no=this.returnmsg1.contact_no;
    }
    else if(fun_id==6){
      this.char_file = return_data.json();
      console.log("file uplaod",this.char_file);
    }
  }
  add(){
    const body = {
      Dept_Name:this.Dept_Name,
      Dept_Desp:this.Dept_Desp,
      Dept_Code:this.Dept_Code,
      Dept_Org_ID:this.Dept_Org_ID,
      address_line_1:this.address_line_1,
      address_line_2:this.address_line_2,
      city:this.city,
      state:this.state,
      country:this.country,
      pincode:this.pincode,
      email:this.email,
      contact_no:this.contact_no
    };
      this.webservice.webRequest(this,'post',this.webservice.create_dept,body,'2','');
  }
  store_id(i){
   this.Dept_Id=i;
   const body1={
    Dept_Id:this.Dept_Id
   }
   this.webservice.webRequest(this,'post',this.webservice.get_dept,body1,'5','');
  }
  delete(){
    const body2 = {
      Dept_Id:this.Dept_Id
    };
    this.webservice.webRequest(this,'post',this.webservice.delete_dept,body2,'3','');
    // window.location.reload(true);
  }
  edit(){
    const body3 = {
      Dept_Id:this.Dept_Id,
      Dept_Name:this.Dept_Name,
      Dept_Desp:this.Dept_Desp,
      Dept_Code:this.Dept_Code,
      Dept_Org_ID:this.Dept_Org_ID,
      address_line_1:this.address_line_1,
      address_line_2:this.address_line_2,
      city:this.city,
      state:this.state,
      country:this.country,
      pincode:this.pincode,
      email:this.email,
      contact_no:this.contact_no
    };
      this.webservice.webRequest(this,'post',this.webservice.update_dept,body3,'4','');
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

  //   let headers: Headers = new Headers();
  // headers.append('Content-Type', 'application/x-www-form-urlencoded');

  // let formData = new FormData();
  // formData.append('file', this.files);
  // let options = new RequestOptions({ headers: headers });
  // // let options: RequestOptionsArgs = { headers: headers };

  // return this.http.post('https://10.0.0.7:9000/api/create_character', formData, { headers: headers })
  // .map((res: any) => (res.text() != "" ? res.json() : {}));
  }
  upload() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    // if (fileCount > 0) { // a file was selected
        // for (let i = 0; i < fileCount; i++) {
            formData.append('char_image_file', inputEl.files.item(0));
            formData.append('char_name','s');
            formData.append('char_description','s');
        // }
        this.http.post('http://lg.djitsoft.xyz/api/create_character',formData)
        .subscribe(
          data =>  { this.returnmsg = data.json();
          },
          err => console.log('Web service:failed'),
          () => console.log('Web service:Success Return data:',this.returnmsg));
            // do whatever you do...
            // subscribe to observable to listen for response
    // }
// }
}
}