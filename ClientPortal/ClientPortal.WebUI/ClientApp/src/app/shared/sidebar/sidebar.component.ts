import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
/** sidebar component*/
export class SidebarComponent implements OnInit {
  currentUser: User;
  /** sidebar ctor */
  constructor(private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit() { }

}
