import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { ShowbookComponent } from './showbook/showbook.component';
import { ReadlaterComponent } from './readlater/readlater.component';
import { FavoriteComponent } from './favorite/favorite.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    AddbookComponent,
    UserloginComponent,
    UserdashboardComponent,
    UsersignupComponent,
    ShowbookComponent,
    ReadlaterComponent,
    FavoriteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
