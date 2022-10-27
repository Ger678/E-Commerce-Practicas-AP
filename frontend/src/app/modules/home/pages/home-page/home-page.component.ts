import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public listOfProducts: any = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.cargarData();
  } 

  public cargarData(){
    this.restService.get('https://dummyjson.com/products/search?q=phone').subscribe(data => {
      this.listOfProducts = data;
    })
  }
}
