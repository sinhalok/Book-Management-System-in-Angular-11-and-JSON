import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,ReactiveFormsModule} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { BookModel } from './userdashboard.model';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  formValue !:FormGroup;
 
  bookData !: any;

  bookModelObj : BookModel = new BookModel();

  constructor(private formbuilder: FormBuilder, private api:ApiService,private http: HttpClient) { }

  ngOnInit(): void {
    this.formValue= this.formbuilder.group({
      bookName: [''],
      author: [''],
      genre:[''],
      year:['']
    })
    this.getAllBook();
    
  }

  getAllBook(){
    this.api.getBook()
    .subscribe(res=>{
      this.bookData=res;
    })
  }
  saveReadLater(row:any){
    this.bookModelObj.id=row.id;
    this.formValue.controls['bookName'].setValue(row.bookName);
    this.formValue.controls['author'].setValue(row.author);
    this.formValue.controls['genre'].setValue(row.genre);
    this.formValue.controls['year'].setValue(row.year);
   

    this.bookModelObj.bookName=this.formValue.value.bookName;
    this.bookModelObj.author=this.formValue.value.author;
    this.bookModelObj.genre=this.formValue.value.genre;
    this.bookModelObj.year=this.formValue.value.year;
   
    
    this.http.post<any>("http://localhost:3000/readlater",this.formValue.value)
    .subscribe(res=>{
      alert("Added to ReadLater Successfull");
      this.formValue.reset();
     
    },err=>{
      alert("Something went Wrong");
    })
  }

    saveFavorite(row:any){
      
    this.bookModelObj.id=row.id;
    this.formValue.controls['bookName'].setValue(row.bookName);
    this.formValue.controls['author'].setValue(row.author);
    this.formValue.controls['genre'].setValue(row.genre);
    this.formValue.controls['year'].setValue(row.year);
   

    this.bookModelObj.bookName=this.formValue.value.bookName;
    this.bookModelObj.author=this.formValue.value.author;
    this.bookModelObj.genre=this.formValue.value.genre;
    this.bookModelObj.year=this.formValue.value.year;
   
    
    this.http.post<any>("http://localhost:3000/favorite",this.formValue.value)
    .subscribe(res=>{
      alert("Added to Favorite Successfull");
      this.formValue.reset();
     
    },err=>{
      alert("Something went Wrong");
    })

    }


}
