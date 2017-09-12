import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from "../product.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video-lists',
  templateUrl: './video-lists.component.html',
  providers : [ProductService],
  styleUrls: ['./video-lists.component.css']
})
export class VideoListsComponent implements OnInit {
 returnmsg;
  constructor(private _service:ProductService,private _router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //let id = Number.parseInt(params['id']);
      //this.person = this.peopleService.get(id);
      console.log('route',params['Image_Act'])
    });
    this._service.webRequest(this,'post',`http://lg.djitsoft.xyz/api/TestModuleDetails?modul_id=1`,'0','123','');
  }
  webresponse(fun_id,r2)
  {
    this.returnmsg = r2.json();
    console.log('hhh',fun_id,r2.json());
  }
  selectvideolists(i)
  {
    localStorage.setItem("videolist", JSON.stringify(i));
           this._router.navigate(['/video']);
  }
}
