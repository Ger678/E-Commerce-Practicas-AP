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
  public categoryList: any = [];
  public thumbnailList: any = [];

  //TODO faltaría model de producto para evitar posibles problemas

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDataOfProducts(); // productos de telefonos
    this.cargarDataOfSeveralProducts(2);
    this.getCategory();
    this.getThumbnailsOfCategory(this.categoryList)
  }

  public cargarDataOfProducts() {
    this.restService
      .get('https://dummyjson.com/products/?limit=10')
      .subscribe((data) => {
        this.listOfProducts = Object.values(data);
        this.listOfProductsModel = Object.values(data);
      });
  }

  public getCategory() {
    this.restService.get('https://dummyjson.com/products/categories').subscribe(data => {
      this.categoryList = data;
    })
  }

  public filterThumbnails(query: string){
    return this.thumbnailList.filter(function(el: string){
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }

  public getThumbnailsOfCategory(categories: any[]) {  
    let items: any[] = [];
    let item: any = [];  
    for (let i = 0; i < categories.length; i++) {
      this.restService.get(`https://dummyjson.com/products/category/${ categories[i] }?select=thumbnail&limit=1`).subscribe(data => {
        items = this.thumbnailList.push(data);
      })
    }
    
    console.log(this.filterThumbnails('thumbnail'))

  }

  public cargarDataOfSeveralProducts(id: number) {
    this.restService
      .get(`https://dummyjson.com/products/${id}`)
      .subscribe((data) => {
        this.singleProduct = data;
      });
  }
  //TODO probablemente esto debería estar en un servicio
  // Rama German
}
