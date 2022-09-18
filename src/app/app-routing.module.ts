import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin)
  },
  { 
    path: '',   redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
