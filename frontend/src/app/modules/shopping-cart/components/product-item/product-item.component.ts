import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() item: any = {};
  @Input() idModal: string = "";
  @Input() modalBody: any ;
  @Output() updateCart: EventEmitter<boolean> = new EventEmitter()
  public id: number = 2;
  public price: number = 0.99;
  public images: any = [];
  public modal: object

  constructor(private restService: RestService, private shoppingCartService: ShoppingCartService) {
    this.modal =
    {
      "id": "id",
      "title": "titulo",
      "body": "body",
      "cancelButton": "cancel",
      "aceptButton": "acept",
    }
   }

  ngOnInit(): void {
    this.ratingStars();
    this.imagesOfProducts(this.id)
    this.price = this.item.price * this.item.amount

  }

  ngAfterViewChecked(){
    //console.log(this.item)
    this.modal =
    {
      "id": this.idModal,
      "title": this.item.title,
      "body": this.modalBody,
      "cancelButton": "Cerrar",
      "aceptButton": "Aceptar",
    }
    //console.log(this.modal)
  }

    // Sube la cantidad de productos e incremeta el precio
    public addAmount(){
      this.shoppingCartService.addCart(this.item);
      this.item.amount += 1;
      this.price = this.item.price * this.item.amount;
      //FIXME al cambiar la cantidad de un producto vuelvo a cargar todo el carrito,
      //convendría que amount se maneje directamente desde la página de carrito quizás
      this.updateCart.emit(true);
      //console.log(this.item.price)
      //console.log(this.price)
    }

    // Reduce la cantidad de productos y decrementa el precio
    public removeAmount() {
      if (this.item.amount == 0 ) {
        //no se puede restar más, amount no puede ser negativo
        console.log("amount debe ser positivo")
      } else if(this.item.amount == 1 ){
        //si amount es uno y se elima se elimina el item, confirm modal
        if(confirm("seguro que quiere eliminar el item?")){
          //elimino item
          this.shoppingCartService.deleteItemCart(this.item)
          console.log("Elimino Item")
          this.updateCart.emit(true);
        } else{
          console.log("Cancelo")
        }
      } else {
        this.shoppingCartService.substractCart(this.item);
        this.item.amount -= 1;
        this.price -= this.item.price;
        this.updateCart.emit(true);
      }
    }

    public ratingStars() {
      const rating = Math.round(this.item.rating); // redondea el rating EJEMPLO "3.64" => "4"
      const stars = document.querySelectorAll('.fa.fa-star'); // seleciona los iconos de estrellas "NodeListOf<Element>"
      const starsToList = Array.prototype.slice.call(stars)   // la convierte en un Array " any[]"
      const selectedStars = starsToList.slice(0, rating)    // selecciona las estrellas del array segun el rating
      // recorre el array agregando la clase "checked"
      selectedStars.forEach(function (s){
        s.classList.add('checked');
      })
    }

    public imagesOfProducts(id: number){
      this.restService
      .get(`https://dummyjson.com/products/${id}?select=images`)
      .subscribe((data) => {
        this.images = Object.values(data);
      })
    }

}
