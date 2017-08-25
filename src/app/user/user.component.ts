import {
  Component,
  OnInit,
  Injectable
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
@Injectable()
export class UserComponent implements OnInit {
  public username;
  public password;
  constructor() {}

  ngOnInit() {}
  create(a, b) {
    this.username = a;
    this.password = b;
  }
}
