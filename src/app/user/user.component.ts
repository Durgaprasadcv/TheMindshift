import { Component, OnInit ,Injectable,Inject} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
@Injectable()
export class UserComponent implements OnInit {

  constructor(public username: string, public password: string) { }

  ngOnInit() {
  }

}
