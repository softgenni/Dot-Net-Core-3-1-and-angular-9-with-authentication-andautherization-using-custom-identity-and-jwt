import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService} from '../../_services/authentication.service';
import { User } from '../../_models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
/** navbar component*/
export class NavbarComponent implements OnInit {
  currentUser: User;
  public sidebarOpened = false;
  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig, private router: Router, private authService: AuthenticationService) {
    config.placement = 'bottom-right';
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }
}
