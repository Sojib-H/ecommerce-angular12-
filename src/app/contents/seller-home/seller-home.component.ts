import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interface/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList: undefined| product[];
  deleteMsg='';
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.productList().subscribe((result)=>{
      this.productList=result;
    })
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.deleteMsg="Product deleted successfully";
        this.productService.productList().subscribe((result)=>{
          this.productList=result;
        })
        setTimeout(() => {
          this.deleteMsg='';
        }, 2000);
      }
    })
  }
  editProduct(id:number){
    console.log(id)
  }
}
