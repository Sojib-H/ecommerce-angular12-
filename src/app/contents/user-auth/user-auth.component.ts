import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/interface/data-type';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  ShowSignUp = false;
  authError:string='';
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.userReload();
  }

  form = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  onSubmit(): void {
    this.userService.userSignUp(this.form)
    // console.log(JSON.stringify(this.form, null, 2));
  }

  Login() {
    this.ShowSignUp = false;
  }
  Register() {
    this.ShowSignUp = true;
  }

  userLogin(val:login){
    this.userService.userLogin(val);
    this.userService.invalidUserAuth.subscribe((result)=>{
      if(result){
        this.authError="Please enter valid user credentials"; 
      }
    })
  }

}
