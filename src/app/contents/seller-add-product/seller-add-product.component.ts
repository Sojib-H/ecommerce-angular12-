import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interface/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  productMsg='';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  ProductSubmit(value:product){
    this.productService.addProduct(value).subscribe((result)=>{
      this.productMsg='Product is Successfully added';
      setTimeout(() => {
        this.productMsg='';
      }, 2000);
    })
  }

}
