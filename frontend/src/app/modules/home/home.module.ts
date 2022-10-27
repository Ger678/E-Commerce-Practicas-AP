import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class HomeModule { }
