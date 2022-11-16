import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
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
  public id: number = 9;

  constructor(private restService: RestService, private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.productDetails(this.id);
    this.imagesOfProducts(this.id);
    this.cargarDataOfProducts();
  }

  //Request for product details || details: price, description,name
  public productDetails(id: number) {
    this.restService
      .get(`https://dummyjson.com/products/${id}`)
      .subscribe((data) => {
        console.log(data)
        this.product = data;
      });
  }

  //Request for product images
  public imagesOfProducts(id: number){
    this.restService
    .get(`https://dummyjson.com/products/${id}?select=images`)
    .subscribe((data) => {
      this.images = Object.values(data)[1];
      console.log(this.images)
    })
  }

  // Data reques for the Carousel
  public cargarDataOfProducts() {
    this.restService
      .get('https://dummyjson.com/products/?limit=10')
      .subscribe((data) => {
        this.listOfProducts = Object.values(data)[0];
        console.log(this.listOfProducts);
      });
  }

  onChangeItem(direction: String) {
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
  }

  onComprar(button: number) {
    console.log(button)
    if (button == 2) {
      //Botón agregar al carrito
      this.shoppingCartService.addCart(this.product)
    } else if (button == 1) {
      //Botón comprar

    } else {
      console.log("error")
    }
  }
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
