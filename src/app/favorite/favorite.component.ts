import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
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
    this.api.getFavorite()
    .subscribe(res=>{
      this.bookData=res;
    })

  }


  deleteFavorite(row : any){
    this.api.deleteFavorite(row.id)
    .subscribe(res=>{
      alert("Book ID Deleted => "+row.id);  
      this.getAllBook();
    })

  }

}
