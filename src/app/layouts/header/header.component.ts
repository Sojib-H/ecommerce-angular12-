import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/interface/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType = 'default';
  sellerName = '';
  userName = '';
  searchResult: undefined | product[];
  constructor(private router: Router, private product: ProductService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller')) {
          this.menuType = 'seller';
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        }else if (localStorage.getItem('user')){
          this.menuType = 'user';
          if (localStorage.getItem('user')) {
            let userStore = localStorage.getItem('user');
            console.log(userStore)
            let userData = userStore && JSON.parse(userStore)[0];
            console.log(userData)
            // this.userName = userData.name;
            console.log(this.userName)
          }
        } else {
          this.menuType = 'default';
        }
      }
    })
  }

  logOut() {
    localStorage.removeItem('seller');
    this.router.navigate(['']);
  }
  UserLogOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  searchProduct(e: KeyboardEvent) {
    if (e) {
      const element = e.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result) => {
        if (result.length > 5) {
          result.length = 5;
        }
        this.searchResult = result;
      })
    }
  }

  hideProduct() {
    this.searchResult = undefined;
  }


  submitSearch(val: string) {
    this.router.navigate([`search/${val}`]);
  }
  redirectDetails(id: number) {
    this.router.navigate(['/details/' + id]);
  }
}
