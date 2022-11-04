import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPagesComponent } from './product-pages/product-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ProductPagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule
  ]
})
export class ProductModule { }
