import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-img',
  templateUrl: './slider-img.component.html',
  styleUrls: ['./slider-img.component.css']
})
export class SliderImgComponent implements OnInit {

  @Input() listOfItems: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
