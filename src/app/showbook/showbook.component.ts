import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowbookComponent implements OnInit {

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
    this.api.getBook()
    .subscribe(res=>{
      this.bookData=res;
    })
  }

}
