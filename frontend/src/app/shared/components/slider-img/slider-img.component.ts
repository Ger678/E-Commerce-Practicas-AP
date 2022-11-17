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

  }




}
