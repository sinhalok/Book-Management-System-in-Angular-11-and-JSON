import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  public signupForm !: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      mobile:['',Validators.required],
      salary:['',Validators.required],
      password:['',Validators.required]

    })
  }


  userLogin(){
    this.http.post<any>("http://localhost:3000/posts",this.signupForm.value)
    .subscribe(res=>{
      alert("User Registerd Successfully");
      this.signupForm.reset();
      this.router.navigate(['userLogin']);
    },err=>{
      alert("Something went wrong");
    }
    )
  }


  get registerFormControl() {
    return this.signupForm.controls;
  }

}
