import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginpageComponent} from './loginpage/loginpage.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
{
  path: 'register', component: RegisterComponent
},
{ path: 'login', component :  LoginpageComponent

},
{path: '', component :  HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
