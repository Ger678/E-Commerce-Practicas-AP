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

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getData(this.id)
    this.imagesOfProducts(this.id)
    this.ratingStars();
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
      const stars: any = document.getElementsByClassName('.fa-star') as HTMLCollectionOf<HTMLElement>;

      console.log(rating);

      //stars.forEach((star) => stars.
      /* var items:any = document.getElementsByClassName('pac-item');
      for (let i = 0; i < items.length; i++) {
          let element = items[i];
          element.style.background = '#2B2B2B';
          element.style.color = '#DEDEDE';
      } */
      
      // FIXME: agregar la clase '.checked' para cada star con el valor de rating
      for (let i = 0; i < rating; i++) {
        let  element = stars[i];
        element.classList.add('.checked');
      }
    }
}
