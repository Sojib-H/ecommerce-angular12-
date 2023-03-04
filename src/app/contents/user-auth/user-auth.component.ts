import { Component, OnInit } from '@angular/core';
import { cart, login, product } from 'src/app/interface/data-type';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  ShowSignUp = false;
  authError: string = '';
  constructor(private userService: UserService, private productService: ProductService) { }
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

  userLogin(val: login) {
    this.userService.userLogin(val);
    this.userService.invalidUserAuth.subscribe((result) => {
      if (result) {
        this.authError = "Please enter valid user credentials";
      } else {
        this.localCartToRemoteCart();
      }
    })
  }

  localCartToRemoteCart() {
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user);
    console.log(user)
    if (data) {
      let cartDataList: product[] = JSON.parse(data);
      cartDataList.forEach((product: product, index) => {
        let cartData: cart = {
          ...product,
          productId: product.id,
          userId,
        };
        delete cartData.id;
        setTimeout(() => {
          this.productService.addToCart(cartData).subscribe((result) => {
            if (result) {
              console.log('item stored in db')
            }
          })
          if (cartDataList.length === index + 1) {
            localStorage.removeItem('localCart');
          }
        }, 500);
      })
    }

    setTimeout(() => {
      this.productService.getCartList(userId);
    }, 2000);
  }

}
