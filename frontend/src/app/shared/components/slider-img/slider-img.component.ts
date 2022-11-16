import { Component, Input, OnInit } from '@angular/core';
import { RestService } from 'src/app/core/services/rest.service';

@Component({
  selector: 'app-slider-img',
  templateUrl: './slider-img.component.html',
  styleUrls: ['./slider-img.component.css']
})
export class SliderImgComponent implements OnInit {

  @Input() listOfItems: any = [];
  @Input() images: Boolean = false;
  thumbnailList: any = [];
  public url: string = 'https://dummyjson.com/products/categories';
  // arrayOfItems: any = []
  constructor( private restService: RestService) {
    // console.log(this.listOfItems)
    // if (this.images == true){
    //   this.arrayOfItems = this.listOfItems[1]
    //   console.log(this.listOfItems[1])
    // } else {
    //   this.arrayOfItems = this.listOfItems[0]
    //   console.log(this.listOfItems[0])
    // }

    // console.log(this.arrayOfItems)
  }

  ngOnInit(): void {
    this.getCategory(this.url)
  }

  public getCategory (url: string) {
    this.restService.get(url).subscribe(data => {
      this.listOfItems = data;
      this.getThumbnailsOfCategory(this.listOfItems);
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
    console.log("Categorias: " + this.listOfItems)
  }
}
