import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../webservice/web.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video-lists',
  templateUrl: './video-lists.component.html',
  providers : [WebService],
  styleUrls: ['./video-lists.component.css']
})
export class VideoListsComponent implements OnInit {
 returnmsg;
 id_received;
 count=0;
  constructor(private webservice:WebService,private _router: Router,private route: ActivatedRoute) 
  {
    this.count=0;
   }

  ngOnInit() {
    this.count=0;
    let id = this.route.snapshot.paramMap.get('id');
    this.id_received=id
    //this.video_path_html=this.returnmsg1.test[id].video_path;
    console.log('data from bcarousel to video-list',id)
    //this.route.params.subscribe(params => {
      //let id = Number.parseInt(params['id']);
      //this.person = this.peopleService.get(id);
      //console.log('data from carousel route to videolist',params)
   // });
   const body = {user_id:'32'};
   this.webservice.webRequest(this,'post',this.webservice.video_list,body,'123','');
  }
  webresponse(fun_id,return_data)
  {
    this.returnmsg = return_data.json();
  }
  selectvideolists(i)
  {
    let id = i;
    localStorage.setItem("videolist", JSON.stringify(i));
           this._router.navigate(['/video',id]);
  }
  incr_count(i)
  {
    if(i==0)
    {
      this.count=0;
    }
    else{
      this.count++;
    }
    return this.count;
  }
  back()
  {
    this._router.navigate(['/bcarousel']);
  }
}
