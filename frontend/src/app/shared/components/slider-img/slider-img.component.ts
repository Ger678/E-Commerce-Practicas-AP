import { Component, Input, OnInit } from '@angular/core';
import { RestService } from 'src/app/core/services/rest.service';

@Component({
  selector: 'app-slider-img',
  templateUrl: './slider-img.component.html',
  styleUrls: ['./slider-img.component.css']
})
export class SliderImgComponent implements OnInit {

  @Input() thumbnailList: any = [];
  public categoryList: any = [];

  constructor( private restService: RestService) { }

  ngOnInit(): void {
    this.getCategory();
    /*if (this.getThumbnailsOfCategory(this.categoryList) == undefined) {
      this.getCategory();
      console.log("Lista: " + this.thumbnailList)
      console.log("Categorias: " + this.categoryList)
    } */
    
  }

  public getCategory() {
    this.restService.get('https://dummyjson.com/products/categories').subscribe(data => {
      this.categoryList = data;
    })
    this.getThumbnailsOfCategory(this.categoryList);
    console.log(this.categoryList);
  }

  public getThumbnailsOfCategory(categories: any[]) {  
    let items: any[] = [];
    let item: any[] = [];  
    for (let i = 0; i < categories.length; i++) {
      this.restService.get(`https://dummyjson.com/products/category/${categories[i]}?select=thumbnail,category&limit=1`).subscribe(data => {
        let d = Object.values(data)[0];
        item = d[0];
        items.push(item);
      })
    }
    this.thumbnailList = items;
    console.log("Lista: " + this.thumbnailList)
    console.log("Categorias: " + this.categoryList)
  }

}
