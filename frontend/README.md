# Frontend Tienda e-commerce
## Práctica AP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Add FontAwesone

npm install @fortawesome/angular-fontawesome
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-solid-svg-icons

en app.module.ts 

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowDown as faArrowDown } from '@fortawesome/free-solid-svg-icons';

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  export class AppModule {
  constructor (library: FaIconLibrary) {
    library.addIcons(faArrowDown);
  }
}

ejemplo de uso:
<fa-icon [icon]="['fas','arrow-down']"></fa-icon>
