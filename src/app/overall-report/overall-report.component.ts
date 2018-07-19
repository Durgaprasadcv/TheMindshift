import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice/web.service';
@Component({
  selector: 'app-overall-report',
  templateUrl: './overall-report.component.html',
  providers: [WebService],
  styleUrls: ['./overall-report.component.css']
})
export class OverallReportComponent implements OnInit {
  side_menu_visibility;
  constructor(private webservice: WebService) {
    this.side_menu_visibility=this.webservice.side_menu_visibility;
   }

  ngOnInit() {
  }

}
