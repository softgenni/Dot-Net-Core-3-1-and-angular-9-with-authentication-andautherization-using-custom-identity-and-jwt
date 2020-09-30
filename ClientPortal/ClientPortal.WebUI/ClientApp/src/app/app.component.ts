import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { User} from './_models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
