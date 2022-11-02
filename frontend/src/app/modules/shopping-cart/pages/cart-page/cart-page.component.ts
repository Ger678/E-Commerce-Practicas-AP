import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public cartProduct: any = [];
  public id: number = 2;
  public amount: number = 1;
  public price: number = this.cartProduct.price;
  public images: any = [];
  public modalBody: any;

  constructor(private restService: RestService) {

  }

  ngOnInit(): void {
    this.getData(this.id)
  }
  // Datos del producto con Id
  public getData(id: number){
    this.restService.get(`https://dummyjson.com/products/${id}`).subscribe(data => {
      this.cartProduct = data
    })
  }

  // // Sube la cantidad de productos e incremeta el precio
  // public addAmount(){
  //   this.amount += 1;
  //   this.price = this.cartProduct.price * this.amount;
  //   console.log(this.price)
  // }

  // // Reduce la cantidad de productos y decrementa el precio
  // public removeAmount() {
  //   this.amount -= 1;
  //   this.price -= this.cartProduct.price;
  //   console.log(this.price)
  // }

    //Peticiones para las imagenes el Carousel en el Modal

    // public ratingStars() {
    //   const rating = Math.round(this.cartProduct.rating); // redondea el rating EJEMPLO "3.64" => "4"
    //   const stars = document.querySelectorAll('.fa.fa-star'); // seleciona los iconos de estrellas "NodeListOf<Element>"
    //   const starsToList = Array.prototype.slice.call(stars)   // la convierte en un Array " any[]"
    //   const selectedStars = starsToList.slice(0, rating)    // selecciona las estrellas del array segun el rating
    //   // recorre el array agregando la clase "checked"
    //   selectedStars.forEach(function (s){
    //     s.classList.add('checked');
    //   })
    // }
}
