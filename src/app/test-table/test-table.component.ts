import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../webservice/web.service';
@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  providers: [WebService],
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit {
uid;
returnmsg;
side_menu_visibility;
constructor(private _router: Router,private webservice: WebService) { }

ngOnInit(){
  this.uid=(JSON.parse(localStorage.getItem('user')));
  const body = {user_id:this.uid};
  this.webservice.webRequest(this,'post',this.webservice.gettest_admin,body,'1','');
  this.side_menu_visibility=this.webservice.side_menu_visibility;
}
edit(){
  alert("Edit");
}
delete(){
  alert("delete");
}
create_test(i){
  this._router.navigate(['/create-test1',i]);
}
webresponse(fun_id,return_data){
  if(fun_id==1)
  {
    this.returnmsg = return_data.json();
    console.log('api',this.returnmsg);
  }
  else if(fun_id==2)
  {
    this.returnmsg = return_data.json();
    console.log('api',this.returnmsg);
    const body = {user_id:this.uid};
    this.webservice.webRequest(this,'post',this.webservice.gettest_admin,body,'1','');
  }
}
view_test(i){
  console.log('test id-',i);
  this._router.navigate(['/question-option-preview',i]);
}
delete_test(i){
  const body4 = {
    Test_Status:0,
    test_id:i,
    Org_id:1
  };
  this.webservice.webRequest(this,'post',this.webservice.save_test,body4,'2','');
}
}
