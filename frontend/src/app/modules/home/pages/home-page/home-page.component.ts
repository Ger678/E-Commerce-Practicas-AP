import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public listOfProducts: any = [];
  public listOfProductsModel: Product[] = [];

  //TODO faltaría model de producto para evitar posibles problemas, pero quizás directamente cuando ya tengamos nuestra api

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDataOfProducts(); // productos de telefonos
  }

  public cargarDataOfProducts() {
    this.restService
      .get('https://dummyjson.com/products/?limit=10')
      .subscribe((data) => {
        this.listOfProducts = Object.values(data)[0];
        console.log(this.listOfProducts);
      });
  }

  //TODO la url base solo se debería escribir una vez, en el servicio
}
