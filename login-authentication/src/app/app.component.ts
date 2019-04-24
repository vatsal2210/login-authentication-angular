import { Component } from '@angular/core';
import {
  AuthService as SocialAuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import {
  OnInit,
  EventEmitter,
  Input,  
  Output,
  ViewChild
} from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable, of, from } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your Authentication Page';

constructor(  private socialAuthService: SocialAuthService, private http :  HttpClient ){}

/*public facebookLogin() {
  let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  this.socialAuthService.signIn(socialPlatformProvider).then(
    (userData) => { 
          //this will return user data from facebook. What you need is a user token which you will send it to the server
         // this.sendToRestApiMethod(userData.token);
     }
  );
}*/
  }
