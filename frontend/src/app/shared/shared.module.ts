import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SliderImgComponent } from './components/slider-img/slider-img.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    SearchComponent,
    SliderImgComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:  [ CommonModule, SearchComponent,  SliderImgComponent,
    CardComponent,  CardListComponent ]
})
export class SharedModule { }
