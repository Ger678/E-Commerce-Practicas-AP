import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowDown as faArrowDown, faStar as faStar } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})

export class ShoppingCartModule {
  constructor (library: FaIconLibrary) {
    library.addIcons(faArrowDown, faStar);
  }
}
