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
  public singleProduct: any = [];

  //TODO faltaría model de producto para evitar posibles problemas

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDataOfProducts(); // productos de telefonos
    this.cargarDataOfSeveralProducts(2);
  }

  public cargarDataOfProducts() {
    this.restService
      .get('https://dummyjson.com/products/?limit=10')
      .subscribe((data) => {
        this.listOfProducts = Object.values(data);
        this.listOfProductsModel = Object.values(data);
        console.log(this.listOfProducts);
      });
  }
  public cargarDataOfSeveralProducts(id: number) {
    this.restService
      .get(`https://dummyjson.com/products/${id}`)
      .subscribe((data) => {
        this.singleProduct = data;
        console.log(this.singleProduct);
      });
  }
  //TODO probablemente esto debería estar en un servicio
  // Rama German
}
