import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './contents/home/home.component';
import { LoginComponent } from './contents/login/login.component';
import { ProductDetailsComponent } from './contents/product-details/product-details.component';
import { SearchComponent } from './contents/search/search.component';
import { SellerAddProductComponent } from './contents/seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './contents/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './contents/seller-home/seller-home.component';
import { SellerUpdateComponent } from './contents/seller-update/seller-update.component';
import { TestComponent } from './contents/test/test.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'seller-add-product',
    component:SellerAddProductComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'seller-update/:id',
    component:SellerUpdateComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'search/:query',
    component:SearchComponent
  },
  {
    path:'details/:productId',
    component:ProductDetailsComponent
  },
  {
    path:'test',
    component:TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
