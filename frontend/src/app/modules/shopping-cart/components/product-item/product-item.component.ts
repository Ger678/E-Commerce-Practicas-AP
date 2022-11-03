import { Component, Input, OnInit } from '@angular/core';
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
  public id: number = 2;
  public amount: number = 1;
  public price: number = this.item.price;
  public images: any = [];
  public modal: object

  constructor(private restService: RestService) {
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

  }

  ngAfterViewChecked(){
    console.log(this.item)
    this.modal =
    {
      "id": this.idModal,
      "title": this.item.title,
      "body": this.modalBody,
      "cancelButton": "Cerrar",
      "aceptButton": "Aceptar",
    }
    console.log(this.modal)
  }

    // Sube la cantidad de productos e incremeta el precio
    public addAmount(){
      this.amount += 1;
      this.price = this.item.price * this.amount;
      console.log(this.price)
    }

    // Reduce la cantidad de productos y decrementa el precio
    public removeAmount() {
      this.amount -= 1;
      this.price -= this.item.price;
      console.log(this.price)
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
