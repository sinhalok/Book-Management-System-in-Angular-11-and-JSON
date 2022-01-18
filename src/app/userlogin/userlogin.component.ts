import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public loginForm !: FormGroup;

  submitted = false;
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
    
  }

  get registerFormControl() {
    return this.loginForm.controls;
  }

  userLogin(){
    this.http.get<any>("http://localhost:3000/posts")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password;

      });
      if(user){
        alert("User Login Successfull");
        this.loginForm.reset();
        this.router.navigate(['userdashboard']);
        
      }else{
          alert("User not Found!!");
      }
    })

  }

}
