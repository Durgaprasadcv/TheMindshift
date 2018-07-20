import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
import { VgAPI,VgFullscreenAPI,VgPlayer,VgMedia} from 'videogular2/core';
import { Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ElementRef, HostListener, OnDestroy, ViewEncapsulation } from '@angular/core';
import { VgStreamingModule } from 'videogular2/streaming';
@Component({
  selector: 'app-create-test1',
  templateUrl: './create-test1.component.html',
  providers: [WebService],
  styleUrls: ['./create-test1.component.css']
})
export class CreateTest1Component implements OnInit {

  language;
  character;
  video_lib;
  chapter=[];
  start_time;
  stop_time;
  character_selected=[];
  video_paath;
  api:VgAPI;
  create_return;
  matching_string='';
  constructor(private webservice:WebService,public API: VgAPI) { }

  ngOnInit()
  {
    const body1={};
    this.webservice.webRequest(this,'post',this.webservice.get_language,body1,'1','');
    const body2={
      matching_string:this.matching_string
    };
    this.webservice.webRequest(this,'post',this.webservice.get_character,body2,'2','');
    const body3={
      matching_string:this.matching_string
    };
    this.webservice.webRequest(this,'post',this.webservice.get_video,body3,'3','');
  }

  webresponse(fun_id,return_data)
  {
    if(fun_id==1)
    {
      this.language=return_data.json();
      for(let i=0;i<this.language.length;i++)
      {
        this.chapter[i]={};
        this.chapter[i].language_id=this.language[i].Lang_Id;
        this.chapter[i].chapter_name=" ";
        this.chapter[i].video_id=" ";
        this.chapter[i].chapter_description=" ";
      }
    }
    else if(fun_id==2)
    {
      this.character = return_data.json();
      console.log(this.character);
      for(let i=0;i<this.character.characters.length;i++)
      {
        this.character_selected[i]={};
        this.character_selected[i].character_id=this.character.characters[i].char_id;
        this.character_selected[i].character_selected=false;
      }
    }
    else if(fun_id==3)
    {
      this.video_lib = return_data.json();
      console.log(this.video_lib);
    }
    else if(fun_id==4)
    {
      this.create_return = return_data.json();
      console.log(this.create_return);
    }
  }

  creat_test()
  {
    console.log('chapter',this.chapter);
    console.log('character',this.character_selected);
    console.log('start time',this.start_time);
    console.log('stop time',this.stop_time);
    const body4 = {
      chapter:this.chapter,
      character:this.character_selected,
      start_time:this.start_time,
      stop_time:this.stop_time,
      Org_id:1,
      Test_Created_By:100,
      version_no:1,
      parant:0
    };
      this.webservice.webRequest(this,'post',this.webservice.save_test,body4,'4','');
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev,i) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("text1", i);
    console.log('drag',i);
  }


  drop(ev) {
    ev.preventDefault();
    let data=ev.dataTransfer.getData("text");
    let data1=ev.dataTransfer.getData("text1");
    document.getElementById(ev.target.id).innerHTML=data1;
    console.log('drop',data1);
    console.log('drop_id',ev.target.id);
    this.chapter[ev.target.id].video_id=data1;
  }
  preview(i){
    console.log('preview_test');
    let temp;
    temp=this.video_paath;
    this.video_paath=i;
    console.log('preview_test-',this.video_paath);
    if(temp)
    {
      console.log(this.api.getDefaultMedia().currentTime);
      this.api.getDefaultMedia().currentTime=0;
      console.log(this.api.getDefaultMedia().currentTime);
    }
  }

  onPlayerReady(api:VgAPI) {
    this.api = api;
    this.api.play();
    this.api.getDefaultMedia().currentTime=0;
  }

  video_search()
  {
    console.log('matching_string',this.matching_string);
    const body3={
      matching_string:this.matching_string
    };
    this.webservice.webRequest(this,'post',this.webservice.get_video,body3,'3','');

    const body2={
      matching_string:this.matching_string
    };
    this.webservice.webRequest(this,'post',this.webservice.get_character,body2,'2','');
  }
}
