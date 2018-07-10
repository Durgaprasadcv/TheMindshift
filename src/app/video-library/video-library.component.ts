import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Http , Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { ElementRef, Input, ViewChild } from '@angular/core';
@Component({
  selector: 'app-video-library',
  templateUrl: './video-library.component.html',
  providers: [WebService],
  styleUrls: ['./video-library.component.css']
})
export class VideoLibraryComponent implements OnInit {
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;
  @ViewChild('fileInputa') inputEla: ElementRef;
  returnmsg;
  returnmsg1;
  vid_id;
  vid_name;
  vid_description;
  vid_author;
  privacy;
  address_line_1;
  address_line_2;
  city;
  state;
  country;
  pincode;
  email;
  contact_no;
  files;
  returnmsg_add;
  uid;
  side_menu;
  Access_Code;
  constructor(private webservice: WebService,private http: Http) { }

  ngOnInit() {
    this.webservice.webRequest(this,'post',this.webservice.get_video,'','1','');
    this.uid=(JSON.parse(localStorage.getItem('user')));

    this.side_menu=(JSON.parse(localStorage.getItem('side_menu')));
    console.log('meenu',this.side_menu);
    let i;
    for(i=0;i<this.side_menu.menu.length;i++)
    {
        if(this.side_menu.menu[i].Menu_Module_Href=="/video-library")
        {
            this.Access_Code=this.side_menu.menu[i].Access_Code;
            console.log("Access_Code-",this.Access_Code);
        }
    }
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
      this.vid_id=this.returnmsg1.videos[0].vid_id;
      this.vid_name=this.returnmsg1.videos[0].vid_name;
      this.vid_description=this.returnmsg1.videos[0].vid_description;
      this.vid_author=this.returnmsg1.videos[0].vid_author;
      this.privacy=this.returnmsg1.videos[0].privacy;
    }
  }
  // add(){
  //   const body = {
  //     vid_name:this.vid_name,
  //     vid_description:this.vid_description,
  //     vid_author:this.vid_author,
  //     privacy:this.privacy,
  //     address_line_1:this.address_line_1,
  //     address_line_2:this.address_line_2,
  //     city:this.city,
  //     state:this.state,
  //     country:this.country,
  //     pincode:this.pincode,
  //     email:this.email,
  //     contact_no:this.contact_no
  //   };
  //     this.webservice.webRequest(this,'post',this.webservice.create_video,body,'2','');
  // }
  store_id(i){
    console.log(i);
   this.vid_id=i;
   const body1={
    vid_id:this.vid_id
   };
   this.webservice.webRequest(this,'post',this.webservice.get_video,body1,'5','');
  }
  delete(){
    const body2 = {
      vid_id:this.vid_id
    };
    this.webservice.webRequest(this,'post',this.webservice.delete_video,body2,'3','');
    // window.location.reload(true);
  }
  // edit(){
  //   const body3 = {
  //     vid_id:this.vid_id,
  //     vid_name:this.vid_name,
  //     vid_description:this.vid_description,
  //     vid_author:this.vid_author,
  //     privacy:this.privacy,
  //   };
  //     this.webservice.webRequest(this,'post',this.webservice.update_video,body3,'4','');
  // }
  onChange(event) {
    this.files = event.srcElement.files;
    console.log(this.files);
  }
  edit(){
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
     formData.append('vid_id', this.vid_id);
     formData.append('vid_file', inputEl.files.item(0));
      formData.append('vid_name',this.vid_name);
      formData.append('vid_description',this.vid_description);
      formData.append('vid_author',this.uid);
      formData.append('privacy',this.privacy);
      console.log('form data',formData);
      this.http.post('http://www.lg.djitsoft.xyz/api/update_video',formData)
      .subscribe(
        data =>  { this.returnmsg_add = data.json();
      },
      err => console.log('Web service:failed'),
      () => console.log('Web service:Success Return data:',this.returnmsg_add));
  }
  add(){
    console.log('code');
    let inputEla: HTMLInputElement = this.inputEla.nativeElement;
    let fileCount: number = inputEla.files.length;
    let formData = new FormData();
      formData.append('vid_file', inputEla.files.item(0));
      formData.append('vid_name',this.vid_name);
      formData.append('vid_description',this.vid_description);
      formData.append('vid_author',this.uid);
      formData.append('privacy',this.privacy);
      console.log('form data',formData);
      this.http.post('http://www.lg.djitsoft.xyz/api/create_video',formData)
      .subscribe(
        data =>  { this.returnmsg_add = data.json();
      },
      err => console.log('Web service:failed'),
      () => console.log('Web service:Success Return data:',this.returnmsg_add));
  }
  nullify(){
    this.vid_id='';
    this.vid_name='';
    this.vid_description='';
    this.vid_author='';
    this.privacy=0;
    this.address_line_1='';
    this.address_line_2='';
    this.city='';
    this.state='';
    this.country='';
    this.pincode='';
    this.email='';
    this.contact_no='';
  }

}
