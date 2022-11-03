import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SliderImgComponent } from './components/slider-img/slider-img.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PrevNextButtonsComponent } from './components/prev-next-buttons/prev-next-buttons.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    SearchComponent,
    SliderImgComponent,
    CardComponent,
    CardListComponent,
    CarouselComponent,
    PrevNextButtonsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:  [ CommonModule, SearchComponent,  SliderImgComponent,
    CardComponent,  CardListComponent, CarouselComponent,  PrevNextButtonsComponent,
    ModalComponent]
})
export class SharedModule { }
