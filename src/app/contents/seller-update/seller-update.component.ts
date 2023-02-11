import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/interface/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-update',
  templateUrl: './seller-update.component.html',
  styleUrls: ['./seller-update.component.css']
})
export class SellerUpdateComponent implements OnInit {

  productData: undefined | product;
  updateMsg = '';
  constructor(private route: ActivatedRoute, private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.productService.getProduct(productId).subscribe((result) => {
      this.productData = result;
    })
  }

  ProductUpdate(value: product) {
    if(this.productData){
      value.id = this.productData.id;
    }
    this.productService.updateProduct(value).subscribe((result) => {
      if (result) {
        this.updateMsg = "Product updated successfully";
      }
    });
    setTimeout(() => {
      this.updateMsg = '';
      this.router.navigate(['seller-home']);
    }, 3000);
  }

}
