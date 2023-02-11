import { Component, OnInit } from '@angular/core';
import { login, signUp } from 'src/app/interface/data-type';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellerService) { }
  showLogin = false;
  logginError="";

  ngOnInit(): void {
    this.seller.releadSeller();
  }

  signUp(formValue: signUp): void {
    this.seller.SellerSignUp(formValue);
  }
  login(formValue: login): void {
    this.seller.SellerLogin(formValue);
    this.seller.IsLoggingError.subscribe((isError)=>{
      if(isError){
        this.logginError="Email or Password is not correct!";
        setTimeout(() => {
          this.logginError="";
        }, 2000);
      }
    })
  }

  OpenLogin(){
    this.showLogin = true;
  }
  OpenSignUp(){
    this.showLogin = false;
  }

}
