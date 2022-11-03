import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPagesComponent } from './product-pages/product-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductPagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductModule { }
