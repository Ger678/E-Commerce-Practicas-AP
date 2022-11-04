import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ProductPagesComponent } from './modules/product/product-pages/product-pages.component';
import { CartPageComponent } from './modules/shopping-cart/pages/cart-page/cart-page.component';

const routes: Routes = [

  {
    path: '', component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'product', component: ProductPagesComponent
  },
  {
    path: 'cart', component: CartPageComponent,
    loadChildren: () => import(`./modules/shopping-cart/shopping-cart.module`).then(m => m.ShoppingCartModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
