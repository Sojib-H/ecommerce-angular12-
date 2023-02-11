import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { product } from 'src/app/interface/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent implements OnInit {

  ShowSignUp = true;
  productData: undefined | product;
  constructor(private productService: ProductService, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('productId');
    productId && this.productService.getProduct(productId).subscribe((result) => {
      this.productData = result;
    })
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  Login() {
    this.ShowSignUp = false;
  }
  Register() {
    this.ShowSignUp = true;
  }

}
