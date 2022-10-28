import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';


@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.css'],
})
export class ProductPagesComponent implements OnInit {
  public product: any = [];
  public images: any = [];
  public id: number = 9;

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.productDetails(this.id)
    this.imagesOfProducts(this.id)
  }

  public productDetails(id: number) {
    this.restService
      .get(`https://dummyjson.com/products/${id}`)
      .subscribe((data) => {
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

  public next(){
    this.id = this.id + 1;
    console.log(this.id)
  }
  
  public previous(){
    this.id = this.id - 1;
    console.log(this.id)
  }
}