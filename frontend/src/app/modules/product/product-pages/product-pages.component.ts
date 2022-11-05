import { Component, OnInit } from '@angular/core';
import { SliderServiceService } from 'src/app/shared/services/slider-service.service';
import { RestService } from '../service/rest.service';


@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.css'],
})
export class ProductPagesComponent implements OnInit {
  public listOfProducts: any = [];
  public product: any = [];
  public images: any = [];
  public id: number = 2;
  public category!: string;

  constructor(
    private restService: RestService,
    private sliderService: SliderServiceService
  ) {}

  ngOnInit(): void {
    this.productDetails(this.id);
    this.imagesOfProducts(this.id);
    this.cargarDataOfProducts();
    this.getCategory();
  }

  public getCategory() {
    this.sliderService.recibeCategory().subscribe((d) => {
      this.category = d;
    });
  }

  public showCategory(){
    console.log("Esta es la categoria: " + this.category)
  }

  //Request for product details || details: price, description,name
  public productDetails(id: number) {
    this.restService
      .get(`https://dummyjson.com/products/${id}`)
      .subscribe((data) => {
        this.product = data;
      });
  }

  //Request for product images
  public imagesOfProducts(id: number) {
    this.restService
      .get(`https://dummyjson.com/products/${id}?select=images`)
      .subscribe((data) => {
        this.images = Object.values(data)[1];
      });
  }

  // Data reques for the Carousel
  public cargarDataOfProducts() {
    this.restService
      .get('https://dummyjson.com/products/?limit=10')
      .subscribe((data) => {
        this.listOfProducts = Object.values(data)[0];
      });
  }

  /*   onChangeItem(direction: String) {
    console.log(direction)
    if (direction == "next") {
      this.id = this.id + 1;
      this.ngOnInit();
      console.log(this.id)
    } else {
      this.id = this.id - 1;
      this.ngOnInit(); //que hace este comando?
      console.log(this.id)
    }
  } */

  // Next & Previous Buttons || increment and decrement the value of the id variable
  // public next(){
  // this.id = this.id + 1;
  // this.ngOnInit();
  // console.log(this.id)
  // }

  // public previous(){
  // this.id = this.id - 1;
  // this.ngOnInit(); //que hace este comando?
  // console.log(this.id)
  // }
}
