import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth.service';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /*
  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
  */

}
