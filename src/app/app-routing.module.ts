import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ReadlaterComponent } from './readlater/readlater.component';
import { ShowbookComponent } from './showbook/showbook.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

const routes: Routes = [
  //{path: '',redirectTo:'login',pathMatch:'full'}
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'addbook',component:AddbookComponent},
  {path:'showBook',component:ShowbookComponent},
  {path:'userLogin',component:UserloginComponent},
  {path:'userdashboard',component:UserdashboardComponent},
  {path:'usersignup',component:UsersignupComponent},
  {path:'readlater',component:ReadlaterComponent},
  {path:'favorite',component:FavoriteComponent},
  
  {path:'homepage',component:HomepageComponent},
{path: 'login',component:LoginComponent},
{path: 'signup',component:SignupComponent},
{path: 'dashboard',component:EmployeeDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
