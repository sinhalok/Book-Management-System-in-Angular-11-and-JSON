import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-readlater',
  templateUrl: './readlater.component.html',
  styleUrls: ['./readlater.component.css']
})
export class ReadlaterComponent implements OnInit {

  formValue !: FormGroup;
  bookData !: any;
  constructor(private formbuilder: FormBuilder,private api: ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      bookName:[''],
      author:[''],
      genre:[''],
      year:['']
    })
    this.getAllBook();
  }

  getAllBook(){
    this.api.getReadLater()
    .subscribe(res=>{
      this.bookData=res;
    })
  }

  deleteReadLater(row:any){
    this.api.deleteReadLater(row.id)
    .subscribe(res=>{
      alert("Book ID Deleted => "+row.id); 
      this.getAllBook();
    })
  }

}
