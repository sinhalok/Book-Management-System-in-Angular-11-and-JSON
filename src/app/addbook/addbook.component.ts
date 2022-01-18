
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { BookModel } from './addbook.model';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  
  formValue !:FormGroup;
  showAdd !: boolean;
  showUpdate !: boolean;
  bookData !: any;

  submitted=false;


  constructor(private formbuilder: FormBuilder, private api:ApiService) { }
  bookModelObj : BookModel = new BookModel();
  ngOnInit(): void {

    this.formValue= this.formbuilder.group({
      bookName: ['',Validators.required],
      author: ['',Validators.required],
      genre:['',Validators.required],
      year:['',Validators.required]
    })
    this.getAllBook();
    
  }

  get registerFormControl() {
    return this.formValue.controls;
  }
  postBookDetails(){
    this.bookModelObj.bookName=this.formValue.value.bookName;
    this.bookModelObj.author=this.formValue.value.author;
    this.bookModelObj.genre=this.formValue.value.genre;
    this.bookModelObj.year=this.formValue.value.year;
    
    this.api.postBook(this.bookModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Book Added Successfully");
      let ref = document.getElementById("cancel")
      ref?.click();
      this.getAllBook();

      this.formValue.reset();
    },err=>{
      alert("Something went wrong");
    })
  }


  getAllBook(){
    this.api.getBook()
    .subscribe(res=>{
      this.bookData=res;
    })
  }

  clickAddBook(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;

  }
  
  updateBookDetail(){ 
    this.bookModelObj.bookName=this.formValue.value.bookName;
    this.bookModelObj.author=this.formValue.value.author;
    this.bookModelObj.genre=this.formValue.value.genre;
    this.bookModelObj.year=this.formValue.value.year;
    this.api.updateBook(this.bookModelObj,this.bookModelObj.id)
    .subscribe(res=>{
      alert("Updated Book Successfully");
      let ref = document.getElementById("cancel");  
      ref?.click();
      this.formValue.reset();
      this.getAllBook();
    })
  }

  onEdit(row : any){
    this.showUpdate=true;
    this.showAdd=false;
    this.bookModelObj.id=row.id;
    this.formValue.controls['bookName'].setValue(row.bookName);
    this.formValue.controls['author'].setValue(row.author);
    this.formValue.controls['genre'].setValue(row.genre);
    this.formValue.controls['year'].setValue(row.year);
  }

  deleteBook(row: any){
    this.api.deleteBook(row.id)
    .subscribe(res=>{
      alert("Book Id Deleted => "+ row.id);
      this.getAllBook();
    })
  }
}
