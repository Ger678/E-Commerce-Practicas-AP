import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { RestService } from '../../service/rest.service';
import { ShoppingCartModule } from '../../shopping-cart.module';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public cartProduct: any = [];
  public idArray: number[] = [];
  public productArray: any = [];
  public total: number = 0;
  public shipping: number = 1;
  //public price: number = this.cartProduct.price;
  //public images: any = [];
  public modalBody: any;

  constructor(private shoppingCartService: ShoppingCartService, private restService: RestService) {

  }

  ngOnInit(): void {

    //Provisionalmente defino los productos manualmente
    //TODO: agregar productos al carrito desde página de productos

    // this.idArray.forEach(id => {
    //   this.getData(id);
    // })
    // setInterval(()=>{this.shoppingCartService.setCart(this.productArray)},2000)

    //Obtengo productos que están en el carrito (desde localStorage o desde Base de datos)
    this.onUpdateCart()
    //obtengo una lista de los productos y su cantidad
  }

  // Datos del producto con Id
  //Esto no va a estar acá
  public getData(id: number){
    // this.restService.get(`https://dummyjson.com/products/${id}`).subscribe(data => {
    // console.log(data)
    // this.productArray.push(data)
    // })
  }

  public continuarCompra(){
    console.log("continuar compra")
  }

  onUpdateCart(){
    console.log("update cart")
    this.cartProduct = this.shoppingCartService.getCart()
    this.getTotals()
  }

  //TODO Cuentas de Totales
  //TODO Eliminar productos agregados
  //FIXME evitar que agregue dos veces el mismo producto al carrito
  // // Sube la cantidad de productos e incremeta el precio
  public getTotals(){
    let amount = 0
    this.total = 0

    this.cartProduct.forEach((product: any) => {
      this.total += product.price * product.amount;
      amount += product.amount
    });

    //TODO definir como calcular el envio

    this.shipping = 100 * amount;
  }

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

    //TODO Al agregar al carrito agregar mensaje que diga, producto agregado
    //TODO Falta una forma fácil de ir al carrito (idealmente de ver el carrito mientras se sigue comprando)
}
