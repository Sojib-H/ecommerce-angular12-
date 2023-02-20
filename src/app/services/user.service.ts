import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from '../interface/data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: signUp) {
    this.http.post('http://localhost:3000/users',data,{observe:'response'})
    .subscribe((result)=>{
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['/'])
      }
    })
  }
  userReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }
}
