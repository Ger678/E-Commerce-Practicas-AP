import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/core/services/rest.service';
import { SliderServiceService } from '../../services/slider-service.service';

@Component({
  selector: 'app-slider-img',
  templateUrl: './slider-img.component.html',
  styleUrls: ['./slider-img.component.css']
})
export class SliderImgComponent implements OnInit {

  @Input() thumbnailList: any = [];
  public categoryList: any = [];
  public url: string = 'https://dummyjson.com/products/categories';

  constructor( private restService: RestService,
    private sliderService: SliderServiceService,
    private router: Router) { }

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

  public showCategory(category: string){
    console.log("Esta es la Category: " + category);
    this.router.navigate(['/product']);
    this.sliderService.sendCategory(category);
  }

  // async, await || .then
}
