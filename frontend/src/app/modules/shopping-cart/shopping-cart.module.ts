import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ShoppingCartModule { }
