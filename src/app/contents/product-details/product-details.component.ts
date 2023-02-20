import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  productQty:number=1;
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

  form = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }

  handleQty(val:string){
    if(this.productQty<20 && val==='plus'){
      this.productQty+=1;
    }else if(this.productQty > 1 && val==='min'){
      this.productQty-=1;
    }

  }
}
