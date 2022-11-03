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
  public url: string = 'https://dummyjson.com/products/categories';

  constructor( private restService: RestService) { }

  ngOnInit(): void { 
    this.getCategory(this.url)
  }

  public getCategory (url: string) {
    this.restService.get(url).subscribe(data => {
      this.categoryList = data;
      this.getThumbnailsOfCategory(this.categoryList);
    })
    
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

  // async, await || .then
}
