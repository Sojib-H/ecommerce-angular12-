import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, signUp } from '../interface/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  IsSellerLoggedIn = new BehaviorSubject<boolean>(false)
  IsLoggingError = new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }

  SellerSignUp(data: signUp) {
    return this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe((result) => {
      this.IsSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
    })
  }

  releadSeller() {
    if (localStorage.getItem('seller')) {
      this.IsSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  SellerLogin(data: login) {
    return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' }).subscribe((result: any) => {
      if (result && result.body && result.body.length) {
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      } else {
        this.IsLoggingError.emit(true);
      }
    })
  }
}
