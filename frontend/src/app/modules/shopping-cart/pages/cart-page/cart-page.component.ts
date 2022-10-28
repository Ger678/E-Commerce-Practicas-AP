import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public cartProduct: any = [];
  public id: number = 1;
  public amount: number = 1;
  public price: number = this.cartProduct.price;
  public images: any = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getData(this.id)
    this.imagesOfProducts(this.id)
  }

  public getData(id: number){
    this.restService.get(`https://dummyjson.com/products/${id}`).subscribe(data => {
      this.cartProduct = data
      console.log(data)
    })
  }

  public addAmount(){
    this.amount += 1;
    this.price = this.cartProduct.price * this.amount;
    console.log(this.price)
  }

  public removeAmount() {
    this.amount -= 1;
    this.price -= this.cartProduct.price;
    console.log(this.price)
  }

    //Request for product images
    public imagesOfProducts(id: number){
      this.restService
      .get(`https://dummyjson.com/products/${id}?select=images`)
      .subscribe((data) => {
        this.images = Object.values(data);
        console.log(this.images)
      })
    }
}
