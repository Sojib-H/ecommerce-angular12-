import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateComponent } from './seller-update/seller-update.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestComponent } from './test/test.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { UserAuthComponent } from './user-auth/user-auth.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailsComponent,
    SearchComponent,
    SellerAddProductComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerUpdateComponent,
    TestComponent,
    MatchPasswordDirective,
    UserAuthComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbCarouselModule,
    NgIf,
    CarouselModule,
    NgxImageZoomModule
  ]
})
export class ContentsModule { }
