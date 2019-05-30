import { Component, OnInit } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from 'angular5-social-login';
import { FacebookLoginProvider } from 'angular5-social-login';
import { AuthenticationService, TokenPayload } from '../services/auth-api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent  {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      console.error(err);
    });
  }
}