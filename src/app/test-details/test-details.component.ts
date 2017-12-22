import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  providers: [WebService],
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  public returnmsg;

  constructor(private webservice: WebService) { }

  ngOnInit() {
    const body = {user_id:'32'};
    this.webservice.webRequest(this,'post',this.webservice.modules,body,'2','');
  }
  webresponse(fun_id,return_data){
    //  console.log("fid",fun_id,"data",r2.json());
    if(fun_id==2)
    {
          this.returnmsg = return_data.json();
    }
        //  console.log("data",this.returnmsg1.category[0].Test_Mod_Tittle);
    }


}
