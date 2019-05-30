import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from 'angular5-social-login';
import { FacebookLoginProvider } from 'angular5-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { getAuthServiceConfigs } from './socials/socials.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';
import {AuthenticationService} from './services/auth-api.service';
import {AuthGuardService} from './services/auth-guard.service';
import {HomeComponent} from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardComponent,
    RegisterComponent,
    HomeComponent,

   // SocialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [AuthenticationService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
