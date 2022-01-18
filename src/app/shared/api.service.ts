import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  


  constructor(private http : HttpClient) { }

  postEmployee(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  getEmployee(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEmployee(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }


  postBook(data:any){
    return this.http.post<any>("http://localhost:3000/profile",data)
    .pipe(map((res:any)=>{
      return res;
    }
    ))

  }

  getBook(){
    return this.http.get<any>("http://localhost:3000/profile")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateBook(data:any,id:number){
    return this.http.put<any>(`http://localhost:3000/profile/${id}`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteBook(id:number){
    return this.http.delete<any>("http://localhost:3000/profile/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postReadLater(data:any){
    return this.http.post<any>("http://localhost:3000/readlater",data)
    .pipe(map((res:any)=>{
      return res;
    }
    ))

  }

  getReadLater(){
    return this.http.get<any>("http://localhost:3000/readlater")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getFavorite(){
    return this.http.get<any>("http://localhost:3000/favorite")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteFavorite(id:number){
    return this.http.delete<any>("http://localhost:3000/favorite/"+id)
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }

  deleteReadLater(id:number){
    return this.http.delete<any>("http://localhost:3000/readlater/"+id)
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }








}
