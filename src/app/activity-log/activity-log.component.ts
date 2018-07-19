import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  providers: [WebService],
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {
  side_menu_visibility;
  constructor(private webservice: WebService) {
    this.side_menu_visibility=this.webservice.side_menu_visibility;
   }

  ngOnInit() {
  }

}
