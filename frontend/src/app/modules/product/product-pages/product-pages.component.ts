import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { RestService } from '../service/rest.service';


@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.css'],
})
export class ProductPagesComponent implements OnInit {
  //public product: Product = {} as Product;
  public product: any = [];
  public images: any = [];
  public id: number = 14;

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.productDetails(this.id)
    this.imagesOfProducts(this.id)
  }

  public productDetails(id: number) {
    this.restService
      .get(`https://dummyjson.com/products/${id}`)
      .subscribe((data) => {
        console.log(data)
        this.product = data;
      });
  }

  public imagesOfProducts(id: number){
    this.restService
    .get(`https://dummyjson.com/products/${id}?select=images`)
    .subscribe((data) => {
      this.images = Object.values(data);
      console.log(this.images)
    })
  }
}
