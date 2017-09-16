import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   // this.route.params.subscribe(params => {
    //  let id = Number.parseInt(params['id']);
      //this.person = this.peopleService.get(id);
    //  console.log('data in report',params)
   // });
  }

}
