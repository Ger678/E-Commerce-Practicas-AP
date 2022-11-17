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
  public listOfCategories: any = [];
  public listOfProductsModel: Product[] = [];
  public singleProduct: any = [];
  public categoryList: any = [];
  public thumbnailList: any = [];

  //TODO faltaría model de producto para evitar posibles problemas, pero quizás directamente cuando ya tengamos nuestra api

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDataOfProducts(); // productos de telefonos
    this.getCategory()
    //this.cargarDataOfSeveralProducts(2);
  }

  // Carga la lista de productos
  public cargarDataOfProducts() {
    this.restService
      .get('https://dummyjson.com/products/?limit=10')
      .subscribe((data) => {
  //TODO la url base solo se debería escribir una vez, en el servicio
        this.listOfProducts = Object.values(data)[0];
        this.listOfProductsModel = Object.values(data);
      });
  }

  // Busca el detalle de un producto
  public cargarDataOfSeveralProducts(id: number) {
    this.restService
      .get(`https://dummyjson.com/products/${id}`)
      .subscribe((data) => {
        this.singleProduct = data;
      });
  }

  public getCategory () {
   let url: string = 'https://dummyjson.com/products/categories';
    this.restService.get(url).subscribe(data => {
      let categories = Object.values(data);
      console.log(categories)
      this.getThumbnailsOfCategory(categories);
    })

  }

  public getThumbnailsOfCategory(categories: any[]) {
    console.log(categories)
    let items: any[] = [];
    let item: any[] = [];
    for (let i = 0; i < categories.length; i++) {
      this.restService.get(`https://dummyjson.com/products/category/${categories[i]}?select=thumbnail,category&limit=1`).subscribe(data => {

        let d = Object.values(data)[0];
        item = d[0];
        items.push(item);
      })
    }
    console.log(items)
    this.listOfCategories = items
  }
  //TODO probablemente esto debería estar en un servicio
}
