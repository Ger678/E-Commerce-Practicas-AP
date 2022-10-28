import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public cartProduct: any = [];
  public id: number = 15;
  public amount: number = 1;
  public price: number = this.cartProduct.price;
  public images: any = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getData(this.id)
    this.imagesOfProducts(this.id)
  }
  // Datos del producto con Id
  public getData(id: number){
    this.restService.get(`https://dummyjson.com/products/${id}`).subscribe(data => {
      this.cartProduct = data
    })
  }

  // Sube la cantidad de productos e incremeta el precio
  public addAmount(){
    this.amount += 1;
    this.price = this.cartProduct.price * this.amount;
    console.log(this.price)
  }

  // Reduce la cantidad de productos y decrementa el precio
  public removeAmount() {
    this.amount -= 1;
    this.price -= this.cartProduct.price;
    console.log(this.price)
  }

    //Peticiones para las imagenes el Carousel en el Modal
    public imagesOfProducts(id: number){
      this.restService
      .get(`https://dummyjson.com/products/${id}?select=images`)
      .subscribe((data) => {
        this.images = Object.values(data);
      })
    }

    public ratingStars() {
      const rating = Math.round(this.cartProduct.rating);
      const stars = document.querySelectorAll('.fa.fa-star');
      
      const starsList = Array.prototype.slice.call(stars)
      starsList.forEach(function (s){
        s.classList.add('checked');
      })                              // estoy acá
      console.log(stars)
      console.log(starsList);
      /* var items:any = document.getElementsByClassName('pac-item');
      for (let i = 0; i < items.length; i++) {
          let element = items[i];
          element.style.background = '#2B2B2B';
          element.style.color = '#DEDEDE';
      } */

      // FIXME: agregar la clase '.checked' para cada star con el valor de rating
      /* for (let i = 0; i < rating; i++) {
        let item = stars[i];
        console.log(item)
      } */
    }
}
