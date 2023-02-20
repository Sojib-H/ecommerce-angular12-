import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  ShowSignUp = true;
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

}
