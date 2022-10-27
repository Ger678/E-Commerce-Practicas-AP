import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public listOfProducts: any = [];
  public singleProduct: any = [];

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
}
